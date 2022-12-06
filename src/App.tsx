import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { container, pageTitle } from './styles/App.css';
import { stack, row } from './styles/recipes.css';
import { themeToggle } from './styles/style.css';

import { useDarkMode } from './hooks/useDarkMode';
import { CsvUpload } from './components/CsvUpload';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <div className={container}>
        <header className={row({ justify: 'between' })}>
          <h1 className={pageTitle}>Micro Mint for Laddi</h1>
          <button
            className={themeToggle}
            onClick={() => setIsDarkTheme((prev) => !prev)}>
            <span className="material-icons">
              {isDarkTheme ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </header>
        <main>
          <CsvUpload />
        </main>
      </div>
    </div>
  );
}

export default App;
