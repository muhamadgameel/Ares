import React from 'react';
import { Image as RNImage } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './image.styles';
import { ImageProps } from './image.types';

const Image = ({
  resizeMode = 'cover',
  style,
  ...rest
}: ImageProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNImage style={[styles.root, style]} resizeMode={resizeMode} {...rest} />
  );
};

export default Image;
