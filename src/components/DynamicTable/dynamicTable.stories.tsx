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
  api: 'https://jsonplaceholder.typicode.com/posts', 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10
};

export const MultipleColums = Template.bind({});
MultipleColums.args = {
  data: mockData, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10,
  tagColumns: {
    title: ({ value }: { value: string }) => <span style={{ color: 'blue' }}>{value}</span>,
    id: ({ value }: { value: number }) => <strong>{value}</strong>,
    userId: ({ value }: { value: number }) => <strong>{value}</strong>,
    body: ({ value }: { value: string }) => <span>{value}</span>,
    extraColumn1: ({ value }: { value: string }) => <span>{value}</span>,
    extraColumn2: ({ value }: { value: string }) => <span>{value}</span>,
    extraColumn3: ({ value }: { value: string }) => <span>{value}</span>,
    extraColumn4: ({ value }: { value: string }) => <span>{value}</span>,
    extraColumn5: ({ value }: { value: string }) => <span>{value}</span>,
    extraColumn6: ({ value }: { value: string }) => <span>{value}</span>,
  },
};

export const WithTag = Template.bind({});
WithTag.args = {
  api: 'https://jsonplaceholder.typicode.com/posts', 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
  pagination: 10,
  tagColumns: ['body', 'title'],
};
