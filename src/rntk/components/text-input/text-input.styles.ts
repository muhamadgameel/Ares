import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  root: {
    fontSize: theme.typography.body,
    color: theme.colors.primaryText,
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.xs,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
}));
