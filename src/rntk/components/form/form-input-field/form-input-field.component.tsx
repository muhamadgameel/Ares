import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { View } from '../../base/view';
import { InputErrorField } from '../input-error-field';
import { stylesheet } from './form-input-field.styles';
import { FormInputFieldProps } from './form-input-field.types';

const FormInputField = ({
  error,
  hideErrorField,
  children,
  style,
}: FormInputFieldProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.root, style]}>
      {children}
      {hideErrorField ? null : <InputErrorField value={error} />}
    </View>
  );
};

export default FormInputField;
