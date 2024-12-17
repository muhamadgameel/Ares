import { createStyleSheet } from 'react-native-unistyles';
import { Scaling } from '../../../styles';

export const stylesheet = createStyleSheet(theme => ({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: theme.spacing.sm,
  },
  check: (isSelected: boolean) => ({
    borderColor: isSelected ? theme.colors.primary : theme.colors.primaryText,
    borderWidth: 2,
    borderRadius: theme.spacing.xs,
    width: Scaling.s(24),
    height: Scaling.s(24),
  }),
}));
