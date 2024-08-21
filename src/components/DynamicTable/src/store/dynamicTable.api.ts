export interface FetchDataParams {
    api: string;
    queryParams?: { [key: string]: string };
  }
  
  export const fetchData = async ({ api, queryParams }: FetchDataParams): Promise<any[]> => {
    try {
      const url = new URL(api);
  
      if (queryParams) {
        Object.keys(queryParams).forEach((key) => url.searchParams.append(key, queryParams[key]));
      }
  
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-lança o erro para que ele possa ser tratado no componente chamador
    }
  };
  