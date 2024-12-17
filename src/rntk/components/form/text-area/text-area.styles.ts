import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  input: {
    ...theme.typography.body,
    color: theme.colors.primaryText,
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.xs,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    minHeight: theme.typography.body.fontSize * 8,
    maxHeight: theme.typography.body.fontSize * 20,
  },
}));
