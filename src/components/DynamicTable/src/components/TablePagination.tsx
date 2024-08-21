import React from 'react';
import TablePagination from './TablePaginationControler';

interface DynamicTablePaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
  totalItems: number;
  rowsPerPage: number;
}

const DynamicTablePagination: React.FC<DynamicTablePaginationProps> = ({ currentPage, setPage, totalItems, rowsPerPage }) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  return totalPages > 1 ? (
    <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
  ) : null;
};

export default DynamicTablePagination;
