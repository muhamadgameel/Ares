import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  root: {
    color: theme.colors.negativeText,
  },
}));
