import { useRenderer } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { chunkArray } from '../utils/func';

interface IMultipleYearProps extends webforms.ComponentProps {
  data: number[];
  onValueChange: (value: number[]) => void;
  readOnly: boolean;
  selectedYearColor: string;
  selectedYearRaduis: string;
}

const MultipleYear: FC<IMultipleYearProps> = ({
  data,
  readOnly,
  selectedYearColor,
  selectedYearRaduis,
  onValueChange,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [selectedDates, setSelectedDates] = useState(data);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleSelection = (item: number) => {
    if (readOnly) return;
    if (selectedDates.some((date) => date === item))
      setSelectedDates((prev) => prev.filter((value) => value !== item));
    else {
      setSelectedDates((prevData) => [...prevData, item]);
    }
  };
  const isYearEqual = (date: number, value: number) => {
    if (date === value) return true;
    else false;
  };
  const getDecadeYears = (year: number) => {
    const startYear = Math.floor(year / 10) * 10;
    const endYear = startYear + 9;
    return [startYear, endYear];
  };
  useEffect(() => {
    selectedDates.length && onValueChange(selectedDates);
  }, [selectedDates]);

  useEffect(() => {
    setSelectedDates(data);
  }, [data]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className="px-4 pt-2 flex items-center justify-center">
        <div className="flex items-center justify-between gap-4">
          <button
            aria-label="calendar backward"
            className={cn('yearPicker-leftIcon', ' text-gray-800 mr-3')}
            onClick={() => {
              setCurrentYear((prev) => prev - 10);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <span className={cn('yearPicker-title', '  text-base font-bold  text-gray-800')}>
            {getDecadeYears(currentYear)[0]} - {getDecadeYears(currentYear)[1]}
          </span>
          <button
            aria-label="calendar forward"
            className={cn('yearPicker-rightIcon', ' text-gray-800 ml-3')}
            onClick={() => {
              setCurrentYear((prev) => prev + 10);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler  icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between pt-6 ">
        <table
          className={`${readOnly ? 'cursor-auto w-full border-separate' : 'cursor-pointer w-full border-separate'}`}
        >
          <thead>
            {chunkArray(getDecadeYears(currentYear)[0], getDecadeYears(currentYear)[1]).map(
              (row, rowIndex) => (
                <tr>
                  {row.map((item) => (
                    <th
                      key={rowIndex}
                      onClick={() => handleSelection(item)}
                      style={{
                        backgroundColor: selectedDates.some((date) => isYearEqual(date, item))
                          ? selectedYearColor
                          : '',
                        borderRadius: selectedDates.some((date) => isYearEqual(date, item))
                          ? selectedYearRaduis
                          : '',
                      }}
                    >
                      <div className={'flex px-2 py-2 justify-center w-full'}>
                        <p
                          className={` ${
                            selectedDates.some((date) => isYearEqual(date, item))
                              ? cn('yearPicker-selectedYear', ' text-base text-white  ')
                              : cn('yearPicker-years', 'text-base text-gray-500 ')
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              ),
            )}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default MultipleYear;
