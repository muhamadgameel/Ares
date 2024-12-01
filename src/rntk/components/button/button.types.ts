import type {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import type { TextProps } from '../text/text.types';
import type { IconProps } from '../icon/icon.types';

type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'inline';

interface ButtonProps extends TouchableOpacityProps {
  title: TextProps;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariants;
  disabled?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  testID?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export { type ButtonProps, type ButtonVariants };
