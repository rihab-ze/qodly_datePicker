import { useRenderer } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { languages } from '../utils/data';
import { chunkArray } from '../utils/func';

interface IRangeDateProps extends webforms.ComponentProps {
  data: Date[];
  onValueChange: (value: Date[]) => void;
  readOnly: boolean;
  selectedDateColor: string;
  selectedDateRaduis: string;
  selectedRangeColor: string;
  language: string;
}

const RangeDate: FC<IRangeDateProps> = ({
  data,
  readOnly,
  selectedDateColor,
  selectedDateRaduis,
  onValueChange,
  selectedRangeColor,
  language,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [selectedDates, setSelectedDates] = useState<Date[]>(data.map((e) => new Date(e)));
  const [lastClick, setLastClick] = useState<Date>();
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
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
    if (readOnly) return;
    const clickedDate = new Date(currentYear, currentMonth, item);
    setLastClick(clickedDate);
    const prevDate = new Date(selectedDates[0]);
    if (selectedDates.length < 2) {
      const isBeforeFirst = clickedDate < prevDate;
      const isAfterFirst = clickedDate > prevDate;
      if (isBeforeFirst) {
        setSelectedDates([clickedDate, ...selectedDates]);
      } else if (isAfterFirst) {
        setSelectedDates([...selectedDates, clickedDate]);
      } else if (selectedDates.some((date) => new Date(date).getTime() === clickedDate.getTime())) {
        setSelectedDates((prevDates) =>
          prevDates.filter((date) => new Date(date).getTime() !== clickedDate.getTime()),
        );
      } else {
        setSelectedDates([clickedDate]);
      }
    } else {
      setSelectedDates([clickedDate]);
    }
  };

  const isDateEqual = (date: Date, item: number) => {
    if (new Date(date).getTime() === new Date(currentYear, currentMonth, item).getTime())
      return true;
    else false;
  };

  useEffect(() => {
    selectedDates.length && onValueChange(selectedDates);
  }, [selectedDates.length]);

  useEffect(() => {
    let ordredData: Date[] = [...data];
    if (
      ordredData &&
      ordredData.length > 1 &&
      new Date(ordredData[0]).getTime() > new Date(ordredData[1]).getTime()
    )
      [ordredData[0], ordredData[1]] = [ordredData[1], ordredData[0]];
    setSelectedDates(ordredData);
    if (lastClick) {
      setCurrentMonth(lastClick.getMonth());
      setCurrentYear(lastClick.getFullYear());
    } else if (!isNaN(new Date(ordredData[0])?.getMonth())) {
      setCurrentMonth(new Date(ordredData[0])?.getMonth());
      setCurrentYear(new Date(ordredData[0])?.getFullYear());
    }
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
            className={cn('datePicker-icon', 'text-gray-800')}
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
            className={cn('datePicker-icon', ' ml-3 text-gray-800')}
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
      <div className="flex items-center  pt-5 ">
        <table className="w-full border-separate table-fixed">
          <thead>
            <tr>
              {selectedLanguage?.daysOfWeek.map((day) => (
                <th key={day}>
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
                    className="datePicker-day"
                    key={colIndex}
                    onClick={() => handleSelection(item)}
                    style={{
                      backgroundColor: selectedDates.some(
                        (date) => isDateEqual(date, item) && item != '',
                      )
                        ? selectedDateColor
                        : new Date(selectedDates[0]).getTime() <
                              new Date(currentYear, currentMonth, item).getTime() &&
                            new Date(currentYear, currentMonth, item).getTime() <
                              new Date(selectedDates[1]).getTime()
                          ? selectedRangeColor
                          : '',
                      borderRadius: selectedDates.some(
                        (date) =>
                          isDateEqual(date, item) ||
                          (new Date(selectedDates[0]).getDate() < item &&
                            item < new Date(selectedDates[1]).getDate()),
                      )
                        ? selectedDateRaduis
                        : '',
                    }}
                  >
                    <div className={'px-2 py-2 flex w-full justify-center'}>
                      <p
                        className={` ${selectedDates.some((date) => isDateEqual(date, item)) ? cn('datePicker-selectedDay', ' text-base text-white  ') : cn('datePicker-days', 'text-base text-gray-500 ')}`}
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

export default RangeDate;
