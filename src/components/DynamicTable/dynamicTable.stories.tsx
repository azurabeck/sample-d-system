import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DynamicTable from './src/DynamicTable';
import { DynamicTableProps } from './src/types/dynamicTable.types';
import { mockData } from './src/store/mockData'; // Importando os dados simulados
import { mockData2 } from './src/store/mockData2'; // Importando os dados simulados
import DynamicTableDocs from './dynamicTable.doc.mdx';

export default {
  title: 'Components/DynamicTable',
  component: DynamicTable,
  parameters: {
    docs: {
      page: DynamicTableDocs,
    },
  },
} as Meta<DynamicTableProps>;

const Template: StoryFn<DynamicTableProps> = (args: DynamicTableProps) => <DynamicTable {...args} />;

export const DefaultTravel = Template.bind({});
DefaultTravel.args = {
  //api: 'https://api.dev.k8s.safra.int/case-management/v1/searchcasebyuser?UserOwner=FlavioH&TypeRequest=1&Application=6', 
  //objectAccess: 'data.record',
  data: mockData2,
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
    'Reference#': ['caseAttribute[5].value'], 
    'Initiator': ['caseAttribute[8].value'],                     
    'Period From': ['caseAttribute[0].value', '', 'date'],      
    'Period To': ['caseAttribute[15].value', '', 'date'],       
    'Itinerary From': ['caseAttribute[6].value'],     
    'Itinerary To': ['caseAttribute[9].value'],   
    'Current Activity': ['currentActivity'], 
    'Request Status': ['status', undefined, undefined, 1, true], // Com tag de status
    'Result': ['-'], 
  },
};

export const NoData = Template.bind({});
NoData.args = {
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
    'Application Name': ['applicationName'], 
    'Created By': ['createdBy'],             
    'Period From': ['caseAttribute[0].value'], 
    'Manager Name': ['caseAttribute[1].value'], 
  },
};

export const WithObjectAccess = Template.bind({});
WithObjectAccess.args = {
  data: mockData2, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
    'Application Name': ['applicationName'], 
    'Created By': ['createdBy'],                     
    'Period From': ['caseAttribute[0].value'],       
    'Manager Name': ['caseAttribute[1].value'], 
  },
};

export const ManualColumnRender = Template.bind({});
ManualColumnRender.args = {
  data: mockData2, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
    'Application Name': ['applicationName'], 
    'Created By': ['createdBy'],                     
    'Period From': ['caseAttribute[0].value', '', 'date'],       
    'Manager Name': ['caseAttribute[1].value'], 
  },
};

export const AutoColumnRender = Template.bind({});
AutoColumnRender.args = {
  data: mockData, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false
};

export const ManualColumnSize = Template.bind({});
ManualColumnSize.args = {
  data: mockData2, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
    'Application Name': ['applicationName', '350px'], 
    'Created By': ['createdBy'],                     
    'Period From': ['caseAttribute[0].value', '200px'],       
    'Manager Name': ['caseAttribute[1].value'], 
  },
};

export const DecoratingMultipleLines = Template.bind({});
DecoratingMultipleLines.args = {
  data: mockData, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
     'Text': ['body', '100px', null, 2],  
     'ID': ['userId', '52%'],  
     'Title': ['title', '40%'],  
  }
};

export const DecoratingEllipse = Template.bind({});
DecoratingEllipse.args = {
  data: mockData, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
     'Text': ['body', '100px'],  // Renderiza com ellipsis na primeira quebra de linha
     'ID': ['userId', '52%'],  
     'Title': ['title', '40%'],  
  }
};

export const DecoratingWithTag = Template.bind({});
DecoratingWithTag.args = {
  data: mockData,
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  renderColumns: {
    'Title': ['title', '150px', null, undefined, true], // Aplica tag
    'Body': ['body', 'calc(100% - 150px)', null, undefined, true], // Aplica tag
  },
};

export const FilterOn = Template.bind({});
FilterOn.args = {
  api: 'https://jsonplaceholder.typicode.com/posts', 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: true,
};

export const PaginationOn = Template.bind({});
PaginationOn.args = {
  data: mockData2, 
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  pagination: 3,
  renderColumns: {
    'Application Name': ['applicationName', '350px'], 
    'Created By': ['createdBy'],                     
    'Period From': ['caseAttribute[0].value', '200px'],       
    'Manager Name': ['caseAttribute[1].value'], 
  },
};

export const FormatingTime = Template.bind({});
FormatingTime.args = {
  data: mockData2,
  clickRow: (rowData: any) => console.log('Row clicked:', rowData),
  filter: false,
  pagination: 10,
  renderColumns: {
    'Time Option (timestamp)': ['createdOn', undefined, 'time'],                
    'Day Option': ['caseAttribute[0].value', undefined, 'date'],     
  },
};
