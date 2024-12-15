import type { ImageProps as RNImageProps } from 'react-native';

interface ImageProps extends RNImageProps {
  testID?: string;
}

export { type ImageProps };
