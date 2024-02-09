import { useRenderer } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { languages } from '../utils/data';
import { chunkArray } from '../utils/func';

interface ISingleDateProps extends webforms.ComponentProps {
  data: Date;
  onValueChange: (value: Date) => void;
  readOnly: boolean;
  selectedDateColor: string;
  selectedDateRaduis: string;
  language: string;
}

const SingleDate: FC<ISingleDateProps> = ({
  data,
  selectedDateColor,
  selectedDateRaduis,
  readOnly,
  onValueChange,
  language,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [lang, setLang] = useState<string>(language);
  const selectedLanguage = languages[lang as keyof typeof languages];

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(11);
    }
  };
  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    }
  };

  const handleSelection = (item: number) => {
    if (readOnly) {
      return;
    } else {
      data = new Date(currentYear, currentMonth, item);
      onValueChange(data);
    }
  };
  const isDateEqual = (date: Date, item: number) => {
    if (new Date(date).getTime() === new Date(currentYear, currentMonth, item).getTime())
      return true;
    else false;
  };
  useEffect(() => {
    setCurrentMonth(data.getMonth());
    setCurrentYear(data.getFullYear());
  }, [data]);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className="px-4 pt-2 flex items-center justify-between">
        <span className={cn('datePicker-title', '  text-base font-bold  text-gray-800')}>
          {selectedLanguage?.months[currentMonth]} {currentYear}
        </span>
        <div className="flex items-center">
          <button
            onClick={prevMonth}
            aria-label="calendar backward"
            className={cn('datePicker-icon', ' text-gray-800')}
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
            onClick={nextMonth}
            aria-label="calendar forward"
            className={cn('datePicker-icon', 'ml-3 text-gray-800')}
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
      <div className="flex items-center justify-between pt-5 ">
        <table className="w-full">
          <thead>
            <tr>
              {selectedLanguage?.daysOfWeek.map((day) => (
                <th>
                  <div className="w-full flex justify-center">
                    <p
                      className={cn(
                        'datePicker-weekDay',
                        'text-base font-medium text-center text-gray-800',
                      )}
                    >
                      {day}
                    </p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chunkArray(currentYear, currentMonth).map((row, rowIndex) => (
              <tr className={`${readOnly ? 'cursor-auto' : 'cursor-pointer'}`} key={rowIndex}>
                {row.map((item, colIndex) => (
                  <td
                    key={colIndex}
                    onClick={() => handleSelection(item)}
                    style={{
                      backgroundColor:
                        isDateEqual(data, item) && item != '' ? selectedDateColor : '',
                      borderRadius: isDateEqual(data, item) ? selectedDateRaduis : '',
                    }}
                  >
                    <div className={'px-2 py-2  flex w-full justify-center'}>
                      <p
                        className={` ${isDateEqual(data, item) ? cn('datePicker-selectedDay', ' text-base text-white  ') : cn('datePicker-days', 'text-base text-gray-500 ')}`}
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

export default SingleDate;
