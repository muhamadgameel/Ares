import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { Icons } from '../../../assets';
import { Icon } from '../../base/icon';
import { Text } from '../../base/text';
import { View } from '../../base/view';
import { FormInputField } from '../form-input-field';
import { stylesheet } from './checkbox.styles';
import { CheckBoxProps } from './checkbox.types';

const CheckBox = ({
  style,
  value = false,
  onChange,
  error,
  hideErrorField,
  text,
}: CheckBoxProps): React.JSX.Element => {
  const { styles, theme } = useStyles(stylesheet);

  const onChangeCB = useCallback(() => {
    onChange?.(!value);
  }, [onChange, value]);

  return (
    <FormInputField error={error} hideErrorField={hideErrorField} style={style}>
      <TouchableOpacity style={styles.root} onPress={onChangeCB}>
        <View center style={[styles.check(value)]}>
          {value ? (
            <Icon
              size="sm"
              color={theme.colors.primary}
              source={Icons.interface.check}
            />
          ) : null}
        </View>
        <Text style={styles.text} {...text} />
      </TouchableOpacity>
    </FormInputField>
  );
};

export default CheckBox;
