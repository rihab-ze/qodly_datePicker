import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { chunkArray } from './utils/func';

import { IYearPickerProps } from './YearPicker.config';

const YearPicker: FC<IYearPickerProps> = ({
  selectedYearColor,
  selectedYearRaduis,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const getDecadeYears = () => {
    const startYear = Math.floor(new Date().getFullYear() / 10) * 10;
    const endYear = startYear + 9;
    return [startYear, endYear];
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className="px-4 pt-2 flex items-center justify-center">
        <div className="flex items-center justify-between gap-4">
          <button
            aria-label="calendar backward"
            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100 mr-3"
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
            {getDecadeYears()[0]} - {getDecadeYears()[1]}
          </span>
          <button
            aria-label="calendar forward"
            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
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
        <table className="w-full">
          <thead>
            {chunkArray(getDecadeYears()[0], getDecadeYears()[1]).map((row, rowIndex) => (
              <tr>
                {row.map((item) => (
                  <th
                    key={rowIndex}
                    style={{
                      backgroundColor: item === new Date().getFullYear() ? selectedYearColor : '',
                      borderRadius: item === new Date().getFullYear() ? selectedYearRaduis : '',
                    }}
                  >
                    <div
                      className={` ${item === new Date().getFullYear() ? 'flex items-center justify-center w-full ' : 'px-2 py-2  flex w-full justify-center'}`}
                    >
                      <p
                        className={` ${item === new Date().getFullYear() ? ' text-base text-white  font-normal' : 'text-base font-normal text-gray-600 '}`}
                      >
                        {item}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default YearPicker;
