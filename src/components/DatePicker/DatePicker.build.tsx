import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { languages } from './months';
import { chunkArray } from './utils/func';

import { IDatePickerProps } from './DatePicker.config';

const DatePicker: FC<IDatePickerProps> = ({
  selectedDateColor,
  selectedDateRaduis,
  language,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const [lang, setLang] = useState<string>(language);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const selectedLanguage = languages[lang as keyof typeof languages];

  useEffect(() => {
    setLang(language);
  }, [language]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className="px-4 flex items-center justify-between">
        <span className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">
          {selectedLanguage?.months[currentMonth]} {currentYear}
        </span>
        <div className="flex items-center">
          <button
            aria-label="calendar backward"
            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
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
      <div className="flex items-center justify-between pt-12 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {selectedLanguage?.daysOfWeek.map((day) => (
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800">{day}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chunkArray(currentYear, currentMonth).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((item, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      backgroundColor: item === 1 ? selectedDateColor : '',
                      borderRadius: item === 1 ? selectedDateRaduis : '',
                    }}
                  >
                    <div
                      className={` ${item === 1 ? 'flex items-center justify-center w-full ' : 'px-2 py-2  flex w-full justify-center'}`}
                    >
                      <p
                        className={` ${item === 1 ? ' text-base text-white  ' : 'text-base text-gray-500 '}`}
                      >
                        {item}
                      </p>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatePicker;
