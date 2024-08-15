import React, { useEffect, useState } from "react";  
import { TableWrapper } from "./tableStyle";  
import { DashboardRecord, CaseAttribute } from "./store/tableStore";   
import { fetchDataFromApi } from "./store/tableApi";  
import { columns } from "./components/organisms/ColumnsTable";

interface ITable {  
  dataSource?: DashboardRecord[];  
  baseUrl: string;
  api: string;  
  handleRowPress?: (event: React.MouseEvent, rowItem: string) => void;  
  columnSettings?: any;
  userOwner?: string;
  typeRequest?: number;
  application?: number;
}  

export const Table: React.FC<ITable> = (props) => {  
  const { handleRowPress, columnSettings, userOwner, application, typeRequest, api, baseUrl } = props;
  const [data, setData] = useState<DashboardRecord[] | undefined>(props.dataSource);  

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchDataFromApi(baseUrl, api, userOwner, typeRequest, application);
        setData(fetchedData.data.record);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    loadData();
  }, [api, baseUrl, userOwner, typeRequest, application]);
  
  const processedData = data && data.map((item: DashboardRecord, index: number) => {  
    const attributes = item.caseAttribute && Array.isArray(item.caseAttribute)  
      ? item.caseAttribute.reduce((acc, attr: CaseAttribute) => {  
          acc[attr.name] = attr.value;  
          return acc;  
        }, {} as Record<string, string>)  
      : {}; 
  
    return {  
      ...item,  
      attributes,  
      key: item.id || index, 
    };  
  });
  

  return (  
    <TableWrapper  
      scroll={{ x: 100 }}  
      dataSource={processedData}  
      pagination={false}  
      columns={columnSettings ? columnSettings : columns}  
      onRow={(record) => ({  
        onClick: (e) => {  
          const formedData = `${record.attributes.PAGE}/${record.attributes.TRAVEL_MANAGEMENT}`;  
          handleRowPress && handleRowPress(e, formedData); 
          e.preventDefault();  
        },  
      })}  
    />  
  );  
};