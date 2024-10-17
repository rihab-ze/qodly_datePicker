import { useRenderer } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { languages } from '../utils/data';
import { chunkArray } from '../utils/func';

interface ISingleMonthProps extends webforms.ComponentProps {
  data: Date;
  onValueChange: (value: Date) => void;
  readOnly: boolean;
  selectedMonthColor: string;
  selectedMonthRaduis: string;
  language: string;
}

const SingleMonth: FC<ISingleMonthProps> = ({
  data,
  readOnly,
  selectedMonthColor,
  selectedMonthRaduis,
  onValueChange,
  language,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [lang, setLang] = useState<string>(language);
  const selectedLanguage = languages[lang as keyof typeof languages];

  const handleSelection = (item: string) => {
    if (readOnly) {
      return;
    } else {
      data = new Date(currentYear, selectedLanguage.months.indexOf(item));
      onValueChange(data);
    }
  };
  const isMonthEqual = (value: string) => {
    if (
      new Date(data).getFullYear() === currentYear &&
      new Date(data).getMonth() === selectedLanguage.months.indexOf(value)
    )
      return true;
    else false;
  };

  useEffect(() => {
    setCurrentYear(data.getFullYear());
  }, [data]);

  useEffect(() => {
    setLang(language);
  }, [language]);
  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className="px-4 pt-2 flex items-center justify-center">
        <div className="flex items-center justify-between gap-4">
          <button
            aria-label="calendar backward"
            className={cn('monthPicker-leftIcon', ' text-gray-800 mr-3')}
            onClick={() => {
              setCurrentYear((prev) => prev - 1);
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
          <span className={cn('monthPicker-title', '  text-base font-bold  text-gray-800')}>
            {currentYear}
          </span>
          <button
            aria-label="calendar forward"
            className={cn('monthPicker-rightIcon', ' text-gray-800 ml-3')}
            onClick={() => {
              setCurrentYear((prev) => prev + 1);
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
            {chunkArray(selectedLanguage?.months).map((row, rowIndex) => (
              <tr>
                {row.map((item) => (
                  <th
                    key={rowIndex}
                    onClick={() => handleSelection(item)}
                    style={{
                      backgroundColor: isMonthEqual(item) ? selectedMonthColor : '',
                      borderRadius: isMonthEqual(item) ? selectedMonthRaduis : '',
                    }}
                  >
                    <div className={'px-2 py-2  flex w-full justify-center'}>
                      <p
                        className={` ${isMonthEqual(item) ? cn('monthPicker-selectedMonth', ' text-base text-white  ') : cn('monthPicker-months', 'text-base text-gray-500 ')}`}
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

export default SingleMonth;
