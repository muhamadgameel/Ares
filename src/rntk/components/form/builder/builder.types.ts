import type { DefaultValues } from 'react-hook-form';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ZodType } from 'zod';
import type { CheckBoxGroupProps } from '../checkbox-group/checkbox-group.types';
import type { CheckBoxProps } from '../checkbox/checkbox.types';
import type { TextAreaProps } from '../text-area/text-area.types';
import type { TextInputProps } from '../text-input/text-input.types';

type TextInputFormFieldItem = {
  type: 'TextInput';
  name: string;
} & Omit<TextInputProps, 'value' | 'onChange'>;

type TextAreaFormFieldItem = {
  type: 'TextArea';
  name: string;
} & Omit<TextAreaProps, 'value' | 'onChange'>;

type CheckBoxFormFieldItem = {
  type: 'CheckBox';
  name: string;
} & Omit<CheckBoxProps, 'value' | 'onChange'>;

type CheckBoxGroupFormFieldItem = {
  type: 'CheckBoxGroup';
  name: string;
} & Omit<CheckBoxGroupProps, 'value' | 'onChange'>;

type FormFieldItem =
  | TextInputFormFieldItem
  | TextAreaFormFieldItem
  | CheckBoxFormFieldItem
  | CheckBoxGroupFormFieldItem;

// Type mapping for field types to their corresponding value types
type FieldValueType<T extends FormFieldItem> = T extends {
  type: 'TextInput' | 'TextArea';
}
  ? string
  : T extends { type: 'CheckBox' }
  ? boolean
  : T extends { type: 'CheckBoxGroup' }
  ? string[]
  : never;

// Utility type to extract field names and their value types
type FormValues<T extends FormFieldItem[]> = {
  [K in T[number]['name']]: FieldValueType<Extract<T[number], { name: K }>>;
};

interface FormBuilderProps<T extends FormFieldItem[]> {
  fields: T;
  onSubmit: (values: FormValues<T>) => void;
  initialValues?: DefaultValues<FormValues<T>>;
  validation?: ZodType<any, any, any>;
  style?: StyleProp<ViewStyle>;
}

export { type FormBuilderProps, type FormFieldItem, type FormValues };
