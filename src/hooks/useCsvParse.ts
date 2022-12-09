import { useState, useEffect } from 'react';

export interface data {
  date: string;
  location: string;
  cost: string;
}

export const useCsvParse = (csvData: File | null) => {
  const [arrayData, setArrayData] = useState<data[]>(() => {
    if (localStorage.getItem('parsedData')) {
      return JSON.parse(localStorage.getItem('parsedData')!);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (!csvData) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      if (typeof target?.result !== 'string') {
        throw new Error('Unexpected result from FileReader');
      }

      const csvLines = target?.result?.split('\n');
      const parsedData = csvLines.map((line) => {
        const columns = line.split(',');
        return {
          // Edit here for other CSV statement formats
          date: columns[2],
          location: columns[4],
          cost: columns[6],
        };
      });
      localStorage.setItem('parsedData', JSON.stringify(parsedData));
      setArrayData(parsedData);
    };
    reader.readAsText(csvData);
  }, [csvData]);

  return [arrayData, setArrayData] as const;
};
