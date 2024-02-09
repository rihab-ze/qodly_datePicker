import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IYearPickerProps } from './YearPicker.config';
import MultipleMonth from './components/MultipleYear';
import RangeMonth from './components/RangeYear';
import SingleMonth from './components/SingleYear';

const YearPicker: FC<IYearPickerProps> = ({
  readOnly,
  selectedYearColor,
  selectedYearRaduis,
  selectedRangeColor,
  selectionModes,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<number>(new Date().getFullYear());
  const [val, setVal] = useState<Array<number>>([]);
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
  const handleValueChange = (newValue: number | Array<number>) => {
    ds.setValue(null, newValue);
  };
  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      {selectionModes === 'multiple' ? (
        <MultipleMonth
          readOnly={readOnly}
          selectedYearRaduis={selectedYearRaduis}
          selectedYearColor={selectedYearColor}
          onValueChange={handleValueChange}
          data={val}
        />
      ) : selectionModes === 'range' ? (
        <RangeMonth
          readOnly={readOnly}
          selectedYearRaduis={selectedYearRaduis}
          selectedYearColor={selectedYearColor}
          onValueChange={handleValueChange}
          data={val}
          selectedRangeColor={selectedRangeColor}
        />
      ) : (
        <SingleMonth
          readOnly={readOnly}
          selectedYearRaduis={selectedYearRaduis}
          selectedYearColor={selectedYearColor}
          onValueChange={handleValueChange}
          data={value}
        />
      )}
    </div>
  );
};

export default YearPicker;
