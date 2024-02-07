import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { languages } from '../DatePicker/utils/data';

import { IMonthPickerProps } from './MonthPicker.config';
import { chunkArray } from './utils/func';

const MonthPicker: FC<IMonthPickerProps> = ({
  selectedMonthColor,
  selectedMonthRaduis,
  language,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const [lang, setLang] = useState<string>(language);
  const selectedLanguage = languages[lang as keyof typeof languages];
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setLang(language);
  }, [language]);
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
            {currentYear}
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
            {chunkArray(selectedLanguage?.months).map((row, rowIndex) => (
              <tr>
                {row.map((item) => (
                  <th
                    key={rowIndex}
                    style={{
                      backgroundColor:
                        item === selectedLanguage?.months[0] ? selectedMonthColor : '',
                      borderRadius: item === selectedLanguage?.months[0] ? selectedMonthRaduis : '',
                    }}
                  >
                    <div
                      className={` ${item === selectedLanguage?.months[0] ? 'flex items-center justify-center w-full ' : 'px-2 py-2  flex w-full justify-center'}`}
                    >
                      <p
                        className={` ${item === selectedLanguage?.months[0] ? ' text-base text-white  font-normal' : 'text-base font-normal text-gray-600 '}`}
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

export default MonthPicker;
