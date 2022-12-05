import { useState, useEffect } from 'react';

import { uploadButton } from '../styles/style.css';
import { stack, row } from '../styles/recipes.css';
import {
  pageTitle,
  sectionTitle,
  mainText,
  boldMuted,
  boldMutedColor,
  italicMutedColor,
  infoText,
  results,
} from '../styles/App.css';

import { form } from '../styles/forms.css';
import { button, themeFocus } from '../styles/style.css';

interface dataEntry {
  date: string;
  location: string;
  cost: string;
}

export const FileUpload = () => {
  const [csvData, setCsvData] = useState<File | null>(null);
  const [arrayData, setArrayData] = useState<dataEntry[]>(() => {
    if (localStorage.getItem('parsedData')) {
      return JSON.parse(localStorage.getItem('parsedData')!);
    } else {
      return [];
    }
  });

  const [searchField, setSearchField] = useState<string>('');

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
        // See https://stackoverflow.com/questions/60043704/property-split-does-not-exist-on-type-arraybuffer-in-angular
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
      className={row({ gap: 'sm', justify: 'between' })}
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

  console.log('Data filtered is:', searchFiltered);

  const filteredData = searchFiltered.map((line, index) => (
    <div
      key={index}
      className={results}
      style={{ width: '100%', textAlign: 'start' }}>
      <p>{line.date}</p>
      <p style={{ flex: 1, paddingInline: '5vw' }}>{line.location}</p>
      <p>{line.cost}</p>
    </div>
  ));

  const filteredTotal = searchFiltered.reduce((total, current) => {
    return total + Number(current.cost);
  }, 0);

  console.log(searchTerms);

  return (
    <section
      style={{
        width: '100%',
        marginInline: 'auto',
        marginBottom: '10vh',
      }}
      className={stack({ gap: 'lg' })}>
      {arrayData.length ? (
        <div className={stack()}>
          <form className={form}>
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

          <h2 className={boldMuted}>Presets:</h2>
          <div
            className={row({ justify: 'center', gap: 'sm' })}
            style={{ flexFlow: 'row wrap', rowGap: '1rem' }}>
            <button
              className={[button.filled, themeFocus].join(' ')}
              onClick={() => setSearchField('Superstore, T&T, Fruiticana')}>
              Groceries
            </button>
            <button
              className={[button.filled, themeFocus].join(' ')}
              onClick={() => setSearchField('Skip, Uber, Dash')}>
              Delivery
            </button>
            <button
              className={[button.filled, themeFocus].join(' ')}
              onClick={() =>
                setSearchField(
                  'Tim Hortons, Blenz, Papparoti, Whole Foods, Al-Hadbah, Subway, Breka, Vietsub, Chipotle, Silver Spoon, Garden, Holy Guacamole'
                )
              }>
              Downtown
            </button>
            <button
              className={[button.filled, themeFocus].join(' ')}
              onClick={() => setSearchField('Best Quality, Himalaya')}>
              Sunset
            </button>
            <button
              className={[button.filled, themeFocus].join(' ')}
              onClick={() => setSearchField('Surrey')}>
              Surrey
            </button>
            <button
              className={[button.filled, themeFocus].join(' ')}
              onClick={() => setSearchField("Mark's, Marshalls")}>
              Clothes
            </button>
          </div>

          <div className={row({ justify: 'end', gap: 'lg' })}>
            <h3>Total:</h3>
            <h3 style={{ width: '30%' }}>{filteredTotal.toFixed(2)}</h3>
          </div>

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
              accept=".csv"
              className={uploadButton}
              onChange={handleUpload}
            />
          </form>
        </>
      )}
    </section>
  );
};
