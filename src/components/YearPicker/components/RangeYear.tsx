import { useRenderer } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { chunkArray } from '../utils/func';

interface IRangeYearProps extends webforms.ComponentProps {
  data: Date[];
  onValueChange: (value: Date[]) => void;
  readOnly: boolean;
  selectedYearColor: string;
  selectedYearRaduis: string;
  selectedRangeColor: string;
}

const RangeYear: FC<IRangeYearProps> = ({
  data,
  readOnly,
  selectedYearColor,
  selectedYearRaduis,
  selectedRangeColor,
  onValueChange,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [selectedDates, setSelectedDates] = useState(data);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleSelection = (item: number) => {
    if (readOnly) {
      return;
    } else {
      switch (true) {
        case item < new Date(selectedDates[0]).getFullYear() && selectedDates.length < 2:
          const modifTest1 = [new Date(item, 0), ...selectedDates];
          setSelectedDates(modifTest1);
          break;
        case item > new Date(selectedDates[0]).getFullYear() && selectedDates.length < 2:
          const modifTest2 = [...selectedDates, new Date(item, 0)];
          setSelectedDates(modifTest2);
          break;
        case selectedDates.some((date) => new Date(date).getFullYear() === item):
          setSelectedDates((prev) =>
            prev.filter((value) => new Date(value).getFullYear() !== item),
          );
          break;
        default:
          setSelectedDates([new Date(item, 0)]);
          break;
      }
    }
  };
  const isYearEqual = (date: Date, value: number) => {
    if (new Date(date).getFullYear() === value) return true;
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
            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100 mr-3"
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
          <span className="focus:outline-none  text-base font-bold  text-gray-800">
            {getDecadeYears(currentYear)[0]} - {getDecadeYears(currentYear)[1]}
          </span>
          <button
            aria-label="calendar forward"
            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
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
          className={`${readOnly ? 'cursor-not-allowed w-full border-separate' : 'cursor-pointer w-full border-separate'}`}
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
                          : new Date(selectedDates[0]).getFullYear() < item &&
                              item < new Date(selectedDates[1]).getFullYear()
                            ? selectedRangeColor
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
                              ? ' text-base text-white  font-normal'
                              : 'text-base font-normal text-gray-600 '
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

export default RangeYear;
