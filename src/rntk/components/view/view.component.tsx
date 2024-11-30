import React from 'react';
import { View as RNView } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './view.styles';
import type { ViewProps } from './view.types';

const View = ({
  style,
  row,
  center,
  testID,
  ...rest
}: ViewProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet, {
    row,
    center,
  });

  return <RNView style={[styles.root, style]} testID={testID} {...rest} />;
};

export default View;
