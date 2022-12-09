import { SetStateAction } from 'react';
import { italicMutedColor } from '../styles/App.css';
import { form } from '../styles/forms.css';
import { themeFocus } from '../styles/style.css';

interface SearchInputProps {
  searchField: string;
  setSearchField: React.Dispatch<SetStateAction<string>>;
}
export function SearchInput({ searchField, setSearchField }: SearchInputProps) {
  return (
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
        onChange={({ target }) => setSearchField(target.value)}
      />
    </form>
  );
}
