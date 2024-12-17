import { CommonFormInputFieldProps } from '../form-input-field/form-input-field.types';

interface TextInputProps extends CommonFormInputFieldProps<string> {
  placeholder?: string;
}

export { type TextInputProps };
