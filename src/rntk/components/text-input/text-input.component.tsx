import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './text-input.styles';
import { TextInputProps } from './text-input.types';

const TextInput = ({ style, ...rest }: TextInputProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return <RNTextInput style={[styles.root, style]} {...rest} />;
};

export default TextInput;
