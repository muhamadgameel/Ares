import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { z } from 'zod';
import { Button } from '../../core/button';
import { CheckBox } from '../checkbox';
import { CheckBoxGroup } from '../checkbox-group';
import { CommonFormInputFieldProps } from '../form-input-field/form-input-field.types';
import { TextArea } from '../text-area';
import { TextInput } from '../text-input';
import { stylesheet } from './builder.styles';
import type {
  FormBuilderProps,
  FormFieldItem,
  FormValues,
} from './builder.types';

const InputComponentsMap = {
  TextInput,
  TextArea,
  CheckBox,
  CheckBoxGroup,
};

const FormBuilder = <T extends FormFieldItem[]>({
  style,
  fields,
  validation = z.any(),
  initialValues,
  onSubmit,
}: FormBuilderProps<T>): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues<T>>({
    resolver: zodResolver(validation),
    defaultValues: initialValues,
  });

  return (
    <View style={[styles.root, style]}>
      {fields.map((field, index) => {
        const { type, name, ...fieldRest } = field;
        const Comp = InputComponentsMap[type] as React.ComponentType<
          CommonFormInputFieldProps<any>
        >;

        return (
          <Controller
            key={name || index}
            control={control}
            name={name as any}
            render={({ field: { onChange, onBlur, value } }) => (
              <Comp
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={
                  (errors[name as keyof FormValues<T>]?.message as string) || ''
                }
                {...fieldRest}
              />
            )}
          />
        );
      })}

      <Button title={{ value: 'Submit' }} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FormBuilder;
