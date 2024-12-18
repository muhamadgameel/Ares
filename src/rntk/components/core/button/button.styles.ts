import { createStyleSheet } from 'react-native-unistyles';
import type { ButtonVariants } from './button.types';
import type { ThemeColors } from '../../../styles/colors/colors.types';

export const stylesheet = createStyleSheet(theme => ({
  root: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.spacing.sm,
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
        },
        secondary: {
          backgroundColor: theme.colors.transparent,
          borderColor: theme.colors.primary,
        },
        danger: {
          backgroundColor: theme.colors.negative,
          borderColor: theme.colors.negative,
        },
        inline: {
          backgroundColor: theme.colors.transparent,
          borderColor: theme.colors.primary,
          paddingHorizontal: theme.spacing.xs,
          paddingVertical: 0,
          borderRadius: 0,
          borderWidth: 0,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.colors.disabled,
          borderColor: theme.colors.disabled,
        },
      },
    },
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  text: {
    color: theme.colors.supportText,
    variants: {
      variant: {
        primary: {
          color: theme.colors.supportText,
        },
        secondary: {
          color: theme.colors.primary,
        },
        danger: {
          color: theme.colors.negativeText,
        },
        inline: {
          color: theme.colors.primary,
        },
      },
      disabled: {
        true: {
          color: theme.colors.disabledText,
        },
      },
    },
  },
}));

export const iconColorsMapping = (
  colors: ThemeColors,
  variant: ButtonVariants | 'disabled',
) => {
  return (
    {
      primary: colors.supportText,
      secondary: colors.primary,
      danger: colors.negativeText,
      inline: colors.primary,
      disabled: colors.disabledText,
    }[variant] || colors.supportText
  );
};
