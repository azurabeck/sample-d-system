import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

interface TableFilterProps {
  column: string;
  onFilterChange: (value: string) => void;
  onSort: (order: 'ascend' | 'descend') => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ column, onFilterChange, onSort }) => {
  const menu = (
    <Menu>
      <Menu.Item onClick={() => onSort('ascend')}>Ordenar Ascendente</Menu.Item>
      <Menu.Item onClick={() => onSort('descend')}>Ordenar Descendente</Menu.Item>
      <Menu.Item onClick={() => onFilterChange('some-filter-value')}>Aplicar Filtro</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button type="text">
        {column} <FilterOutlined />
      </Button>
    </Dropdown>
  );
};

export default TableFilter;
