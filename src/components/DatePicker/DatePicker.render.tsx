import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
// import { monthNames, dayNames } from './months';
import SingleDate from './components/SingleDate';
import MultipleDate from './components/MultipleDate';
import RangeDate from './components/RangeDate';

import { IDatePickerProps } from './DatePicker.config';

const DatePicker: FC<IDatePickerProps> = ({
  readOnly,
  selectedDateColor,
  selectedDateRaduis,
  selectedRangeColor,
  language,
  selectionModes,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const {
    sources: { datasource: ds },
  } = useSources();
  const [value, setValue] = useState<Date>(new Date());
  const [val, setVal] = useState<Array<Date>>([]);

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue();
      if (selectionModes === 'multiple' || selectionModes === 'range') setVal(v);
      else setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  const handleValueChange = (newValue: Date | Array<Date>) => {
    ds.setValue(null, newValue);
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      {selectionModes === 'multiple' ? (
        <MultipleDate
          readOnly={readOnly}
          selectedDateRaduis={selectedDateRaduis}
          selectedDateColor={selectedDateColor}
          onValueChange={handleValueChange}
          data={val}
          language={language}
        />
      ) : selectionModes === 'range' ? (
        <RangeDate
          readOnly={readOnly}
          selectedDateRaduis={selectedDateRaduis}
          selectedDateColor={selectedDateColor}
          onValueChange={handleValueChange}
          data={val}
          selectedRangeColor={selectedRangeColor}
          language={language}
        />
      ) : (
        <SingleDate
          readOnly={readOnly}
          selectedDateRaduis={selectedDateRaduis}
          selectedDateColor={selectedDateColor}
          onValueChange={handleValueChange}
          data={value}
          language={language}
        />
      )}
    </div>
  );
};

export default DatePicker;
