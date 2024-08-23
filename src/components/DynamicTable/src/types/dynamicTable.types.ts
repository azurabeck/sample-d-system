export interface DynamicTableProps {
  api?: string;
  data?: any[]; 
  clickRow: (rowData: any) => void;
  filter?: boolean;
  pagination?: boolean | number;
  objectAccess?: string;
  tagColumns?: {
    [key: string]: React.FC<{ value: any }>;
  };
  renderColumns?: string[]; 
}

export interface DataItem {
  [key: string]: any; // Define que cada chave pode ter qualquer valor
}