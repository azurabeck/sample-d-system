// tableApi.tsx
// Responsabilidade: Funções utilitárias para buscar dados de uma API.

export const fetchDataFromApi = async (baseUrl: string, api: string, userOwner?: string, typeRequest?: number, application?: number) => {
  if (!baseUrl || !api) {
    console.log("api required");
    return;
  }

  let apiUrl = `${baseUrl}${api}`;
  const params = [];

  if (userOwner) params.push(`UserOwner=${userOwner}`);
  if (typeRequest) params.push(`TypeRequest=${typeRequest}`);
  if (application) params.push(`Application=${application}`);

  if (params.length > 0) {
    apiUrl += '?' + params.join('&');
  }

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API');
  }
  const data = await response.json();
  return data;
};