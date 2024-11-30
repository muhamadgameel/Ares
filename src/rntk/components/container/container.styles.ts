import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  safeArea: {
    backgroundColor: theme.colors.rootViewBackgroundColor,
    flex: 1,
  },
  root: {
    backgroundColor: theme.colors.rootViewBackgroundColor,
    flex: 1,
  },
}));
