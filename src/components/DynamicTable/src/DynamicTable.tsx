import React, { useState, useEffect } from 'react';
import { DynamicTableProps, DataItem } from './types/dynamicTable.types';
import { TableWrapper, EllipsisText } from './styles/dynamicTable.style';
import DynamicTablePagination from './components/TablePagination';
import { useFilteredData, usePaginatedData, useSortedData } from './hooks';
import { fetchData } from './store/dynamicTable.api';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Tag from './components/TableTag';
import { formatDateTime } from './hooks/formatDateTime';

const statusMap: Record<number, string> = {
  0: "pending",
  1: "approved",
  2: "canceled",
  3: "rejected",
};

const DynamicTable: React.FC<DynamicTableProps> = ({
  api,
  data,
  clickRow,
  filter,
  pagination,
  objectAccess,
  renderColumns,
}) => {
  const [tableData, setTableData] = useState<DataItem[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'ascend' | 'descend'>('ascend');

  const rowsPerPage = typeof pagination === 'number' ? pagination : 10;

  const filteredData = useFilteredData(tableData, filters);
  const sortedData = useSortedData(filteredData, sortColumn, sortOrder);
  const paginatedData = usePaginatedData(sortedData, currentPage, rowsPerPage);

  useEffect(() => {
    const loadTableData = async () => {
      if (data) {
        setTableData(data);
        console.log('Loaded mock data:', data);
      } else if (api) {
        try {
          const fetchedData = await fetchData({ api, objectAccess: objectAccess || '' });
          if (Array.isArray(fetchedData)) {
            setTableData(fetchedData);
            console.log('Loaded API data:', fetchedData);
          } else {
            console.error('Fetched data is not an array:', fetchedData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    loadTableData();
  }, [api, objectAccess, data]);

  const handleSort = (column: string, order: 'ascend' | 'descend') => {
    setSortColumn(column);
    setSortOrder(order);
  };

  const renderCellContent = (path: string, record: DataItem, formatType?: 'date' | 'time', maxLines: number = 1, useTagRender: boolean = false) => {
    const extractValue = (obj: any, path: string) => {
      return path.split('.').reduce((acc, part) => {
        const [key, index] = part.split(/[\[\]]/).filter(Boolean);
        if (index !== undefined) {
          return acc[key]?.[parseInt(index)];
        }
        return acc?.[key];
      }, obj);
    };
  
    let value = extractValue(record, path);
    
    if (formatType && typeof value === 'string') {
      value = formatDateTime(value, formatType === 'date');
    }
  
    if (useTagRender) {
      if (typeof value === 'number' && statusMap[value]) {
        return <Tag value={value} type="status" />;
      } else {
        return <Tag value={value} type="default" />;
      }
    }

    if (typeof value === 'string') {
      return <EllipsisText maxLines={maxLines}>{value}</EllipsisText>;
    }
  
    return value || 'N/A';
  };

  const columns = renderColumns ? Object.entries(renderColumns) : Object.keys(tableData[0] || {});
  
  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <TableWrapper
        dataSource={paginatedData}
        pagination={false}
        rowKey="id"
        scroll={{ x: 'max-content' }}
        onRow={(record) => ({
          onClick: () => clickRow(record),
        })}
      >
        {tableData.length > 0 && columns.length > 0 && (
          columns.map((column) => {
            const columnTitle = Array.isArray(column[1]) ? column[0] : column;
            const columnPath = Array.isArray(column[1]) ? column[1][0] : column;
            const columnWidth = Array.isArray(column[1]) && column[1].length > 1 ? column[1][1] : undefined;
            const formatType = Array.isArray(column[1]) && column[1].length > 2 ? column[1][2] as 'date' | 'time' : undefined;
            const maxLines = Array.isArray(column[1]) && column[1].length > 3 ? column[1][3] as number : 1;
            const useTagRender = Array.isArray(column[1]) && column[1].length > 4 ? column[1][4] as boolean : false;

            return (
              <TableWrapper.Column
                key={columnPath}
                title={filter ? (
                  <Dropdown
                    overlay={
                      <Menu onClick={({ key }) => handleSort(columnPath, key as 'ascend' | 'descend')}>
                        <Menu.Item key="ascend">Ordenar Ascendente</Menu.Item>
                        <Menu.Item key="descend">Ordenar Descendente</Menu.Item>
                      </Menu>
                    }
                    trigger={['click']}
                  >
                    <span>
                      {columnTitle} <DownOutlined />
                    </span>
                  </Dropdown>
                ) : (
                  columnTitle
                )}
                dataIndex={columnPath}
                width={columnWidth}
                render={(_, record) => renderCellContent(columnPath, record, formatType, maxLines, useTagRender)}
              />
            );
          })
        )}
      </TableWrapper>

      {pagination && (
        <DynamicTablePagination
          currentPage={currentPage}
          setPage={setCurrentPage}
          totalItems={sortedData.length}
          rowsPerPage={rowsPerPage}
        />
      )}
    </div>
  );
};

export default DynamicTable;