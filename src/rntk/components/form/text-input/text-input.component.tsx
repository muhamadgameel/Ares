import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { FormInputField } from '../form-input-field';
import { stylesheet } from './text-input.styles';
import { TextInputProps } from './text-input.types';

const TextInput = ({
  style,
  value = '',
  onChange,
  onBlur,
  onFocus,
  placeholder,
  error,
  hideErrorField,
}: TextInputProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return (
    <FormInputField error={error} hideErrorField={hideErrorField} style={style}>
      <RNTextInput
        style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        placeholder={placeholder}
      />
    </FormInputField>
  );
};

export default TextInput;
