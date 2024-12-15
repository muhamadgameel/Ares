import React from 'react';
import { Image as RNImage } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './image.styles';
import { ImageProps } from './image.types';

const Image = ({
  resizeMode = 'cover',
  style,
  testID,
  ...rest
}: ImageProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNImage
      style={[styles.root, style]}
      resizeMode={resizeMode}
      testID={testID}
      {...rest}
    />
  );
};

export default Image;
