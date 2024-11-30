import type { TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'subhead' | 'body' | 'caption' | 'footnote';
  align?: 'left' | 'right' | 'center' | 'justify';
  fontWeight?: 'bold' | 'regular';
  value?: string;
  testID?: string;
}

export { type TextProps };
