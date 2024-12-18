import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { Icon } from '../../base/icon';
import { Text } from '../../base/text';
import { iconColorsMapping, stylesheet } from './button.styles';
import type { ButtonProps } from './button.types';

const Button = ({
  variant = 'primary',
  title,
  onPress,
  disabled,
  rightIcon,
  leftIcon,
  style,
  testID,
  ...rest
}: ButtonProps): React.JSX.Element => {
  const { styles, theme } = useStyles(stylesheet, {
    variant,
    disabled,
  });

  const hitSlop = useMemo(() => {
    let v = variant === 'inline' ? 8 : 0;

    return { top: v, right: v, bottom: v, left: v };
  }, [variant]);

  const iconColor = useMemo(
    () => iconColorsMapping(theme.colors, disabled ? 'disabled' : variant),
    [theme.colors, variant, disabled],
  );

  return (
    <TouchableOpacity
      style={[styles.root, style]}
      hitSlop={hitSlop}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
      {...rest}>
      <View accessible accessibilityRole="button" style={styles.content}>
        {leftIcon && <Icon color={iconColor} {...leftIcon} />}
        <Text
          variant="body"
          fontWeight="bold"
          align="center"
          style={styles.text}
          {...title}
        />
        {rightIcon && <Icon color={iconColor} {...rightIcon} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
