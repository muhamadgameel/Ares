import { CommonFormInputFieldProps } from '../form-input-field/form-input-field.types';

interface TextAreaProps extends CommonFormInputFieldProps<string> {
  placeholder: string;
}

export { type TextAreaProps };
