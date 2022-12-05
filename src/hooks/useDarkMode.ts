// Initially checks for a system-wide preference, thereafter for whatever is stored in local storage
import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (localStorage.getItem('darkTheme')) {
      return localStorage.getItem('darkTheme') == 'true';
    } else {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      return matchMedia?.matches;
    }
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', isDarkTheme.toString());
  }, [isDarkTheme]);

  return [isDarkTheme, setIsDarkTheme] as const;
};
