type ColorValue = string;

export type ThemeColors = {
  // Main colors
  primary: ColorValue;
  secondary: ColorValue;
  disabled: ColorValue;
  positive: ColorValue;
  warning: ColorValue;
  negative: ColorValue;

  // Text colors
  primaryText: ColorValue;
  secondaryText: ColorValue;
  supportText: ColorValue;
  disabledText: ColorValue;
  positiveText: ColorValue;
  warningText: ColorValue;
  negativeText: ColorValue;

  // Specific colors
  rootViewBackgroundColor: ColorValue;
  transparent: ColorValue;

  statusBar: 'dark-content' | 'light-content';
};
