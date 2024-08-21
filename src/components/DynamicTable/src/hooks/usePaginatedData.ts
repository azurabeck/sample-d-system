export const usePaginatedData = (data: any[], currentPage: number, rowsPerPage: number) => {
  if (!data || data.length === 0) return [];

  const startIndex = (currentPage - 1) * rowsPerPage;
  return data.slice(startIndex, startIndex + rowsPerPage);
};
