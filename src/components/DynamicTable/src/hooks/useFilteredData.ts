import { useEffect, useState } from 'react';

export const useFilteredData = (data: any[], filters: { [key: string]: string }) => {
  if (!data || data.length === 0) return data;

  return data.filter(item =>
    Object.keys(filters).every(key =>
      item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
    )
  );
};
