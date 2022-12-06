import { useState, useEffect, useRef } from 'react';

import { uploadButton } from '../styles/style.css';
import { stack, row } from '../styles/recipes.css';
import {
  sectionTitle,
  italicMutedColor,
  results,
  filteredResults,
  total,
} from '../styles/App.css';

import { form } from '../styles/forms.css';
import { button, themeFocus } from '../styles/style.css';

import { initialPresets, Preset } from '../data/initialPresets';
import { CollapsiblePresets } from './CollapsiblePresets';

interface dataEntry {
  date: string;
  location: string;
  cost: string;
}

export const CsvUpload = () => {
  const [csvData, setCsvData] = useState<File | null>(null);
  const [arrayData, setArrayData] = useState<dataEntry[]>(() => {
    if (localStorage.getItem('parsedData')) {
      return JSON.parse(localStorage.getItem('parsedData')!);
    } else {
      return [];
    }
  });

  const [searchField, setSearchField] = useState<string>('');

  const [presetList, setPresetList] = useState<Preset[]>(initialPresets);

  const handleUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) {
      return;
    }
    const [newFile] = ev.target.files;
    setCsvData(newFile);
  };

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

  const fullData = arrayData.map((line, index) => (
    <div
      key={index}
      className={results}
      style={{ width: '100%', textAlign: 'start' }}>
      <p style={{ flex: 'none' }}>{line.date}</p>
      <p style={{ flex: 1, paddingInline: '5vw' }}>{line.location}</p>
      <p>{line.cost}</p>
    </div>
  ));

  // Filtering
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
    <div
      key={index}
      className={filteredResults}
      style={{ width: '100%', textAlign: 'start' }}>
      <p>{line.date}</p>
      <p style={{ flex: 1, paddingInline: '5vw' }}>{line.location}</p>
      <p>{line.cost}</p>
    </div>
  ));

  return (
    <section
      style={{
        width: '100%',
        marginInline: 'auto',
        marginBottom: '10vh',
      }}
      className={stack({ gap: 'lg' })}>
      {arrayData.length ? (
        <div className={stack({ gap: 'xs' })}>
          <form className={form} onSubmit={(ev) => ev.preventDefault()}>
            <label
              className={italicMutedColor}
              htmlFor="search-string"
              style={{ fontSize: '1.1rem' }}>
              Search terms, separated by commas
            </label>
            <input
              className={themeFocus}
              placeholder="e.g. Blenz, Whole Foods"
              value={searchField}
              onChange={({ target }) => setSearchField(target.value)}></input>
          </form>

          <div className={total}>
            <h3>Total:</h3>
            <h3 style={{ width: '30%', textAlign: 'end' }}>
              {filteredTotal.toFixed(2)}
            </h3>
          </div>

          <CollapsiblePresets setSearchField={setSearchField} />

          {/* <h2 className={boldMuted}>Presets:</h2>
          <div
            className={row({ justify: 'center', gap: 'sm' })}
            style={{ flexFlow: 'row wrap', rowGap: '1rem' }}>
            {presetButtons}
          </div> */}

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
            className={[button.primary, themeFocus].join(' ')}>
            Clear all data
          </button>
        </div>
      ) : (
        <>
          <h2>Upload CSV file here</h2>
          <form
            action=""
            className={stack({ align: 'stretch' })}
            style={{
              padding: '5vh',
              outline: '1px solid grey',
              width: '100%',
            }}>
            <label htmlFor="fileUpload">
              Upload the CSV formatted statement
            </label>
            <input
              id="fileUpload"
              type="file"
              accept=".csv,.txt"
              className={uploadButton}
              onChange={handleUpload}
            />
          </form>
        </>
      )}
    </section>
  );
};
