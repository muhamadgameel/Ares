import { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

type FormInputFieldProps = PropsWithChildren<{
  error?: string;
  hideErrorField?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

interface CommonFormInputFieldProps<T> {
  value: T;
  onChange: (value: T) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error?: string;
  hideErrorField?: boolean;
  style?: StyleProp<ViewStyle>;
}

export { type CommonFormInputFieldProps, type FormInputFieldProps };
