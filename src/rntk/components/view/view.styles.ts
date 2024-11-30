import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet({
  root: {
    variants: {
      row: {
        true: {
          flexDirection: 'row',
        },
      },
      center: {
        true: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
});
