import React from 'react';
import { Text as RNText } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './text.styles';
import type { TextProps } from './text.types';

const Text = ({
  variant = 'body',
  align = 'left',
  fontWeight = 'regular',
  value,
  children,
  style,
  testID,
  ...rest
}: TextProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet, {
    align,
    variant,
    fontWeight,
  });

  return (
    <RNText style={[styles.root, style]} testID={testID} {...rest}>
      {children || value}
    </RNText>
  );
};

export default Text;
