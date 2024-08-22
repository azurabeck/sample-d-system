export interface FetchDataParams {
    api: string;
    queryParams?: { [key: string]: string };
    objectAccess: string;
  }
  
  export const fetchData = async ({ api, queryParams, objectAccess }: FetchDataParams): Promise<any[]> => { 
    try {  
        const url = new URL(api);  
  
        if (queryParams) {  
            Object.keys(queryParams).forEach((key) => url.searchParams.append(key, queryParams[key]));  
        }   
  
        // Faz a requisição para a API  
        const response = await fetch(url.toString());  
        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`);  
        }  
  
        // Função para obter o objeto com base em um caminho  
        const getObjectAtPath = (obj: any, path: string) => {  
            return path.split('.').reduce((acc, part) => {  
                if (part.includes('[') && part.includes(']')) {  
                    const [key, index] = part.split(/[\[\]]/).filter(Boolean);  
                    return acc?.[key]?.[parseInt(index)];  
                }  
                return acc?.[part];  
            }, obj);  
        };  

        // Converte a resposta em JSON  
        const data = await response.json();  
        console.log('Data fetched:', data);

        // Filtra os dados de acordo com o objectAccess, se fornecido  
        const dataFilter = objectAccess ? getObjectAtPath(data, objectAccess) : data;  
        console.log('Data fetched:', dataFilter);
        const dataResult = Array.isArray(dataFilter) ? dataFilter : [];   

        return dataResult;   
    } catch (error) {  
        console.error('Error fetching data:', error);  
        throw error;   
    }  
};
  