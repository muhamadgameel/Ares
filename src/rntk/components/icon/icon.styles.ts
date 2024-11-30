import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet({
  root: {
    variants: {
      size: {
        sm: {
          width: 16,
          height: 16,
        },
        md: {
          width: 24,
          height: 24,
        },
        lg: {
          width: 32,
          height: 32,
        },
        xl: {
          width: 48,
          height: 48,
        },
      },
    },
  },
});
