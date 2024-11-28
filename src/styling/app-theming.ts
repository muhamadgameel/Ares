import { ThemeManager, type Theme } from '../rntk/styles';

const customTheme: Theme = {
  colors: {
    // Main
    primary: '#0038FF',
    secondary: '#E3EFFF',
    disabled: '#F8F8F8',
    positive: '#D8F5E6',
    warning: '#FBF1E0',
    negative: '#FEE2E2',

    // Text
    primaryText: 'red',
    secondaryText: '#4B5563',
    supportText: '#FFFFFF',
    disabledText: '#BCC6DB',
    positiveText: '#12C68B',
    warningText: '#FE9E46',
    negativeText: '#FC5555',

    // Specific
    rootViewBackgroundColor: '#FDFDFD',
    transparent: 'transparent',

    statusBar: 'dark-content',
  },
  typography: {
    h3: 34,
    h2: 28,
    h1: 24,
    subhead: 18,
    body: 16,
    caption: 12,
    footnote: 10,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
};

type CustomTheme = {
  custom: typeof customTheme;
};

let AppThemeManager: ThemeManager<CustomTheme>;

const initTheme = () => {
  AppThemeManager = ThemeManager.getInstance<CustomTheme>();
  AppThemeManager.init({
    custom: customTheme,
  });
};

export { initTheme, AppThemeManager };
