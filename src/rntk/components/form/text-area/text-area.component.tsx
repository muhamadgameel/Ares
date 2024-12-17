import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { FormInputField } from '../form-input-field';
import { stylesheet } from './text-area.styles';
import { TextAreaProps } from './text-area.types';

const TextArea = ({
  style,
  value = '',
  onChange,
  onBlur,
  onFocus,
  placeholder,
  error,
  hideErrorField,
}: TextAreaProps): React.JSX.Element => {
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
        multiline
      />
    </FormInputField>
  );
};

export default TextArea;
