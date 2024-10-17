import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IMonthPickerProps } from './MonthPicker.config';
import MultipleMonth from './components/MultipleMonth';
import RangeMonth from './components/RangeMonth';
import SingleMonth from './components/SingleMonth';

const MonthPicker: FC<IMonthPickerProps> = ({
  readOnly,
  selectedMonthColor,
  selectedMonthRaduis,
  selectedRangeColor,
  language,
  selectionModes,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<Date>(new Date());
  const [val, setVal] = useState<Array<Date>>([]);

  const {
    sources: { datasource: ds },
  } = useSources();

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
        <MultipleMonth
          readOnly={readOnly}
          selectedMonthRaduis={selectedMonthRaduis}
          selectedMonthColor={selectedMonthColor}
          onValueChange={handleValueChange}
          data={val}
          language={language}
        />
      ) : selectionModes === 'range' ? (
        <RangeMonth
          readOnly={readOnly}
          selectedMonthRaduis={selectedMonthRaduis}
          selectedMonthColor={selectedMonthColor}
          onValueChange={handleValueChange}
          data={val}
          selectedRangeColor={selectedRangeColor}
          language={language}
        />
      ) : (
        <SingleMonth
          readOnly={readOnly}
          selectedMonthRaduis={selectedMonthRaduis}
          selectedMonthColor={selectedMonthColor}
          onValueChange={handleValueChange}
          data={value}
          language={language}
        />
      )}
    </div>
  );
};

export default MonthPicker;
