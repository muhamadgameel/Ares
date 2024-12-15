import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './icon.styles';
import { IconProps } from './icon.types';

const Icon = ({
  source,
  size = 'md',
  color,
  style,
  testID,
}: IconProps): React.JSX.Element => {
  const { styles, theme } = useStyles(stylesheet, {
    size,
  });

  const Comp = source;

  return (
    <View style={[styles.root, style]} testID={testID}>
      <Comp
        height="100%"
        width="100%"
        fill={color || theme.colors.primaryText}
      />
    </View>
  );
};

export default Icon;
