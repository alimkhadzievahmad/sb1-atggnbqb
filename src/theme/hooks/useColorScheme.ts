import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import { THEME_COLORS } from '../constants';

export function useColorScheme() {
  const { theme } = useTheme();
  const [colors, setColors] = useState(THEME_COLORS[theme]);

  useEffect(() => {
    setColors(THEME_COLORS[theme]);
  }, [theme]);

  return colors;
}