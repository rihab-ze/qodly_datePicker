export const range = (startYear: number, endYear: number) => {
    const yearsArray = [];
    for (let year = startYear; year <= endYear; year++) {
        yearsArray.push(year);
      }
      return yearsArray;
}
export const chunkArray = (startYear: number,endYear: number) => {
    return Array.from({ length: 4 }, (_, index) =>
      range(startYear,endYear).slice(index * 3, (index + 1) * 3),
    );
  };