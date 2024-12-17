import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { Text } from '../../base/text';
import { stylesheet } from './input-error-field.styles';
import type { InputErrorFieldProps } from './input-error-field.types';

const InputErrorField = ({
  style,
  ...rest
}: InputErrorFieldProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return <Text variant="caption" style={[styles.root, style]} {...rest} />;
};

export default InputErrorField;
