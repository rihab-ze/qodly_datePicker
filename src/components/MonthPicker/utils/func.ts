
export const chunkArray = (months : Array<string>) => {
    return Array.from({ length: 4 }, (_, index) =>
      months.slice(index * 3, (index + 1) * 3),
    );
  };