import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { themeToggle } from './styles/style.css';
import {
  appContainer,
  page,
  corner,
  pageTitle,
  sectionTitle,
  mainText,
  boldMuted,
  boldMutedColor,
  italicMutedColor,
  infoText,
} from './styles/App.css';
import { row } from './styles/recipes.css';

import { useDarkMode } from './hooks/useDarkMode';
import { FileUpload } from './components/FileUpload';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();

  return (
    <div
      id="app"
      className={[appContainer, isDarkTheme ? darkTheme : lightTheme].join(
        ' '
      )}>
      <main className={page}>
        <div className={row({ justify: 'between' })}>
          <h1 className={pageTitle}>Micro Mint for Laddi</h1>
          <button
            className={[themeToggle].join(' ')}
            onClick={() => setIsDarkTheme((prev) => !prev)}>
            <span className="material-icons">
              {isDarkTheme ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>

        <FileUpload />
      </main>
    </div>
  );
}

export default App;
