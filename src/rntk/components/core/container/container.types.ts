import type { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

type ContainerScreenProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
}>;

type ContainerProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
}>;

export { type ContainerProps, type ContainerScreenProps };
