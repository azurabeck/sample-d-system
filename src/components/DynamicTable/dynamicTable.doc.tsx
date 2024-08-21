import React from 'react';
import DynamicTable from './src/DynamicTable';
import Tag from './src/components/TableTag'

const DynamicTableDocument: React.FC = () => {
  return (
    <div>
      <h1>DynamicTable Documentation</h1>
      <p>This is the documentation for the DynamicTable component.</p>
      <DynamicTable
        api="https://jsonplaceholder.typicode.com/posts"
        clickRow={(rowData) => console.log('Row clicked:', rowData)}
        filter={true}
        pagination={10}
        tagColumns={{
          status: Tag, // A coluna 'status' será renderizada dentro do componente Tag
          priority: Tag // Outra coluna que será renderizada como Tag
        }}
      />
    </div>
  );
};

export default DynamicTableDocument;
