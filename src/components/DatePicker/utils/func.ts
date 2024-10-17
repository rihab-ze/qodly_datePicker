export const getNumberOfDaysInMonth = (year: number,month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
export const range = (year: number, month: number) => {
    const firstWeekDay = new Date(year, month, 1).getDay();
    const length = getNumberOfDaysInMonth(year,month);
    const paddedArray = Array.from({ length: firstWeekDay }).fill('');
    const { result } = Array.from({ length }).reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: paddedArray, current: 1 },
    );
    return result;
  };
export const chunkArray = (year: number,month: number) => {
    return Array.from({ length: Math.ceil(range(year,month).length / 7) }, (_, index) =>
      range(year,month).slice(index * 7, (index + 1) * 7),
    );
  };