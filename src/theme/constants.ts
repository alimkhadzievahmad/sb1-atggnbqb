export const THEME_STORAGE_KEY = 'kaustica-theme';

export const THEME_COLORS = {
  light: {
    background: 'bg-gray-50',
    card: 'bg-white',
    cardHover: 'hover:bg-gray-50',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    border: 'border-gray-200',
    input: 'bg-gray-50',
  },
  dark: {
    background: 'bg-gray-900',
    card: 'bg-gray-800',
    cardHover: 'hover:bg-gray-700',
    text: 'text-white',
    textSecondary: 'text-gray-400',
    border: 'border-gray-700',
    input: 'bg-gray-700',
  },
} as const;