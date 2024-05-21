import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Themes;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Themes.LIGHT, toggleTheme };
}
