import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DynamicTable from './src/DynamicTable';
import { DynamicTableProps } from './src/types/dynamicTable.types';
import { mockData } from './src/store/mockData'; // Importando os dados simulados

export default {
  title: 'Components/DynamicTable',
  component: DynamicTable,
} as Meta<DynamicTableProps>;

const Template: StoryFn<DynamicTableProps> = (args: DynamicTableProps) => <DynamicTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  api: 'https://api.dev.k8s.safra.int/case-management/v1/searchcasebyuser?UserOwner=FlavioH&TypeRequest=1&Application=6', 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10,
  objectAccess: 'data.record',
};

export const WithObjectAccess = Template.bind({});
WithObjectAccess.args = {
  api: 'https://api.dev.k8s.safra.int/case-management/v1/searchcasebyuser?UserOwner=FlavioH&TypeRequest=1&Application=6', 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10,
  objectAccess: 'data.record[0].caseAttribute',
};

export const MultipleColums = Template.bind({});
MultipleColums.args = {
  data: mockData, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10,
};

export const WithTag = Template.bind({});
WithTag.args = {
  api: 'https://jsonplaceholder.typicode.com/posts', 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10,
  tagColumns: ['body', 'title'],
};
