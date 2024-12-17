import React from 'react';
import CheckBox from '../checkbox/checkbox.component';
import { FormInputField } from '../form-input-field';
import { CheckBoxGroupProps } from './checkbox-group.types';

const CheckBoxGroup = ({
  style,
  value = [],
  onChange,
  data,
  error,
  hideErrorField,
}: CheckBoxGroupProps): React.JSX.Element => {
  return (
    <FormInputField error={error} hideErrorField={hideErrorField} style={style}>
      {data?.map(item => {
        const itemValue = value.includes(item.value);

        return (
          <CheckBox
            key={item.value}
            value={itemValue}
            text={item.text}
            onChange={v => {
              let newValue = v
                ? [...value, item.value]
                : value.filter(i => i !== item.value);

              onChange(newValue);
            }}
          />
        );
      })}
    </FormInputField>
  );
};

export default CheckBoxGroup;
