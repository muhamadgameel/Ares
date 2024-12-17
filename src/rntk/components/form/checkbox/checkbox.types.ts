import { TextProps } from '../../base/text/text.types';
import { CommonFormInputFieldProps } from '../form-input-field/form-input-field.types';

interface CheckBoxProps extends CommonFormInputFieldProps<boolean> {
  text: TextProps;
}

export { type CheckBoxProps };
