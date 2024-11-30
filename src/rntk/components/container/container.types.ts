import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | undefined;
}

export { type ContainerProps };
