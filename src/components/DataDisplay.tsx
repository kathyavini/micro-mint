import { useState } from 'react';

import {
  sectionTitle,
  results,
  filteredResults,
  location,
  total,
  clearBtn,
  dataContainer,
} from '../styles/App.css';

import { FileUpload } from './FileUpload';
import { CollapsiblePresets } from './CollapsiblePresets';
import { SearchInput } from './SearchTermInput';

import { useCsvParse } from '../hooks/useCsvParse';

export const DataDisplay = () => {
  const [csvData, setCsvData] = useState<File | null>(null);
  const [arrayData, setArrayData] = useCsvParse(csvData);

  const [searchField, setSearchField] = useState<string>('');

  const fullData = arrayData.map((line, index) => (
    <div key={index} className={results}>
      <p>{line.date}</p>
      <p className={location}>{line.location}</p>
      <p>{line.cost}</p>
    </div>
  ));

  const searchTerms = searchField.split(', ');

  const searchFiltered = arrayData.filter((line) => {
    if (searchField && line.location) {
      const queriedString = line.location.toLowerCase();

      return searchTerms.filter(Boolean).some((term) => {
        return queriedString.includes(term.toLowerCase());
      });
    }
  });

  const filteredTotal = searchFiltered.reduce((total, current) => {
    return total + Number(current.cost);
  }, 0);

  const filteredData = searchFiltered.map((line, index) => (
    <div key={index} className={filteredResults}>
      <p>{line.date}</p>
      <p className={location}>{line.location}</p>
      <p>{line.cost}</p>
    </div>
  ));

  return (
    <>
      {arrayData.length ? (
        <div className={dataContainer}>
          <SearchInput
            searchField={searchField}
            setSearchField={setSearchField}
          />

          <div className={total}>
            <h3>Total:</h3>
            <h3>{filteredTotal.toFixed(2)}</h3>
          </div>

          <CollapsiblePresets setSearchField={setSearchField} />

          <h2 className={sectionTitle}>Filtered Results</h2>

          {filteredData}

          <h2 className={sectionTitle}>All Data</h2>

          {fullData}

          <button
            onClick={() => {
              localStorage.removeItem('parsedData');
              setSearchField('');
              setArrayData([]);
            }}
            className={clearBtn}>
            Clear all data
          </button>
        </div>
      ) : (
        <FileUpload setCsvData={setCsvData} />
      )}
    </>
  );
};
