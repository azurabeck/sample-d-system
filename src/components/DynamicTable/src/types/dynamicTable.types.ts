export interface DynamicTableProps {
  api?: string;
  data?: any[]; // Adicione esta linha para permitir que o componente receba dados diretamente
  clickRow: (rowData: any) => void;
  filter?: boolean;
  pagination?: boolean | number;
  tagColumns?: {
    [key: string]: React.FC<{ value: any }>;
  };
}

export interface DataItem {
  [key: string]: any; // Define que cada chave pode ter qualquer valor
}