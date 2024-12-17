import { TextProps } from '../../base/text/text.types';
import { CommonFormInputFieldProps } from '../form-input-field/form-input-field.types';

interface CheckBoxGroupProps
  extends CommonFormInputFieldProps<(string | number)[]> {
  data: {
    text: TextProps;
    value: string | number;
  }[];
}

export { type CheckBoxGroupProps };
