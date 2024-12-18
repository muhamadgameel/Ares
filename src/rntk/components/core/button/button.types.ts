import type {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import type { IconProps } from '../../base/icon/icon.types';
import type { TextProps } from '../../base/text/text.types';

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
