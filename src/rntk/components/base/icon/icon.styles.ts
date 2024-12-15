import { createStyleSheet } from 'react-native-unistyles';
import { Scaling } from '../../../styles';

export const stylesheet = createStyleSheet({
  root: {
    variants: {
      size: {
        sm: {
          width: Scaling.s(16),
          height: Scaling.s(16),
        },
        md: {
          width: Scaling.s(24),
          height: Scaling.s(24),
        },
        lg: {
          width: Scaling.s(32),
          height: Scaling.s(32),
        },
        xl: {
          width: Scaling.s(48),
          height: Scaling.s(48),
        },
      },
    },
  },
});
