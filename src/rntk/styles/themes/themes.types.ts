import type { ThemeColors } from '../colors/colors.types';
import type { ThemeSpacing } from '../spacing/spacing.types';
import type { ThemeTypography } from '../typography/typography.types';

export type Theme = {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
};
