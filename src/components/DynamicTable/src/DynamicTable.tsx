import React, { useState, useEffect } from 'react';  
import { DynamicTableProps, DataItem } from './types/dynamicTable.types';  
import { TableWrapper } from './styles/dynamicTable.style';  
import DynamicTablePagination from './components/TablePagination';  
import { useFilteredData, usePaginatedData, useSortedData } from './hooks';  
import { fetchData } from './store/dynamicTable.api';  
import { Dropdown, Menu, Tag } from 'antd';  
import { DownOutlined } from '@ant-design/icons';  

const DynamicTable: React.FC<DynamicTableProps> = ({  
  api,  
  data,  
  clickRow,  
  filter,  
  pagination,  
  tagColumns,  
  objectAccess,  
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
        // Se existir dados já fornecidos via props  
        setTableData(data);  
        console.log('Loaded mock data:', data);  
      } else if (api) {  
        try {  
          // Chama fetchData independente de objectAccess estar ou não definido  
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
  }, [api, objectAccess, data]); // O efeito agora observa as mudanças de 'api', 'objectAccess' e 'data'

  const handleSort = (column: string, order: 'ascend' | 'descend') => {  
    setSortColumn(column);  
    setSortOrder(order);  
  };  

  const renderCellContent = (columnId: string, value: any) => {  
    if (typeof value === 'object' && value !== null) {  
      return <span>{JSON.stringify(value)}</span>;  
    }  
    if (Array.isArray(tagColumns) && tagColumns.includes(columnId)) {  
      return <Tag>{String(value)}</Tag>;  
    }  
    return value || 'N/A';   
  };  

  return (  
    <div style={{ overflowX: 'auto', width: '100%' }}>  
      <TableWrapper  
        dataSource={paginatedData}  
        pagination={false}  
        rowKey="id"  
        scroll={{ x: 1500 }}  
        onRow={(record) => ({  
          onClick: () => clickRow(record),  
        })}  
      >  
        {Object.keys(tableData[0] || {}).map((column) => (  
          <TableWrapper.Column  
            key={column}  
            title={filter ? (  
              <Dropdown  
                overlay={  
                  <Menu onClick={({ key }) => handleSort(column, key as 'ascend' | 'descend')}>  
                    <Menu.Item key="ascend">Ordenar Ascendente</Menu.Item>  
                    <Menu.Item key="descend">Ordenar Descendente</Menu.Item>  
                  </Menu>  
                }  
                trigger={['click']}  
              >  
                <span>  
                  {column} <DownOutlined />  
                </span>  
              </Dropdown>  
            ) : (  
              column  
            )}  
            dataIndex={column}  
            render={(text) => renderCellContent(column, text)}  
          />  
        ))}  
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