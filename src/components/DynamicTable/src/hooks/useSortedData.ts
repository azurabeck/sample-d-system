
export const useSortedData = (data: any[], column: string, order: 'ascend' | 'descend'): any[] => {
  return [...data].sort((a, b) => {
    if (order === 'ascend') {
      return a[column] > b[column] ? 1 : -1;
    } else {
      return a[column] < b[column] ? 1 : -1;
    }
  });
};
