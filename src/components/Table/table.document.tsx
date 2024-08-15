import React from 'react';

const styles = {
  title: {
    fontFamily: 'Nunito, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '50px',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  divisor: {
    width: '100%',
    height: '1px',
    backgroundColor: '#535252',
    marginBottom: '50px',
  },
  code: {
    backgroundColor:' rgb(56 55 55)',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '100%',
    overflowX: 'auto',
    marginBottom: '50px',
    fontSize: '14px',
    color: '#ffbf04',
  },
};

export const Documentation: React.FC = () => (
  <div>
    <h2 style={styles.title}>Documentation</h2>
    <h4 style={styles.subtitle}>Importação</h4>
    <p>Segue um exemplo de como importart o componente dentro do seu projeto</p>
    <pre style={{ ...styles.code, overflowX: 'auto' }}>
      {`
        'use client';
        import {Table} from '../components/Table/src';
        import { columns } from "../components/Table/src/components/organisms/ColumnsTable"; 
        import { useAuthStore } from "../store/auth/store";
        
        export default function Page() {
        
          const handleRowPress = (row: any) => {
            alert('Row pressed: ');
          }
        
          const { userData } = useAuthStore((state) => state);
        
          return <div style={temporaryStyle}>
                    <Table 
                        handleRowPress={handleRowPress} 
                        columnSettings={columns} 
                        baseUrl='https://api.dev.k8s.safra.int/'
                        api='case-management/v1/searchcasebyuser'
                        userOwner={userData.userName} 
                        typeRequest={1}
                        application={6} />
                  </div>
        }
      `}
    </pre>

    <div style={styles.divisor}></div>


    <h4 style={styles.subtitle}>Colunas</h4>
    <p>Segue um exmplo de como configurar as colunas para o componente dentro do seu projeto</p>
    <pre style={{ ...styles.code, overflowX: 'auto' }}>
      {`
        import React from "react";
        import { ColumnsType } from "antd/es/table";
        import { RenderLinkCell } from "../molecules/RenderLinkCell";
        import { formattedDateTime } from "../../utils/rowUtils";
        import { formatDateTime } from "../../utils/formatDateTime";
        import { AnyObject } from "../../store/tableStore";
        
        export const columns: ColumnsType<AnyObject> = [
          {
            title: "Reference #",
            key: "reference",
            width: 100,
            fixed: "left",
            ellipsis: true,
            showSorterTooltip: true,
            render: (item: AnyObject) =>
              RenderLinkCell(item, item.attributes["CASE_NUMBER"]),
          }
        ];
      `}
    </pre>
  </div>
);

