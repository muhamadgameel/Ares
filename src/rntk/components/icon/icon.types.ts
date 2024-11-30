import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';

interface IconProps {
  source: React.FC<SvgProps>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export { type IconProps };
