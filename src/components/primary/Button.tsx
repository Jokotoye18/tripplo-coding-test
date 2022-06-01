import {colors, layout} from '@constants';
import {globalStyles} from '@globalStyles';

import React, {memo} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';
import {Text} from './Text';

type ButtonProps = TouchableOpacity['props'] & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactElement;
  loaderColor?: string;
  color?: ColorValue;
  isDanger?: boolean;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = memo(
  ({
    title,
    outlined,
    icon,
    loaderColor = colors.secondaryColor,
    disabled,
    // color,
    isLoading = false,
    isDanger,
    style,
    containerStyle,
    ...rest
  }: ButtonProps) => {
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={isLoading || disabled}
          style={[
            outlined ? styles.btnOutlined : styles.btn,
            globalStyles.rowCenter,
            {
              borderColor: isDanger ? 'red' : colors.secondaryColor,
              opacity: disabled ? 0.5 : 1,
            },
            style,
          ]}
          {...rest}
        >
          {icon ? (
            <>{icon}</>
          ) : (
            <>
              <Text
                text={title}
                color={outlined ? colors.secondaryColor : colors.primaryBg}
                fontWeight="600"
                fontSize={16}
                style={[{paddingRight: 5}, isDanger && {color: 'red'}]}
              />
              {isLoading ? (
                <ActivityIndicator animating size="small" color={loaderColor} />
              ) : (
                <View />
              )}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: layout.fontPixel(5),
    height: layout.heightPixel(60),
    backgroundColor: colors.secondaryColor,
  },
  btnOutlined: {
    borderRadius: layout.fontPixel(5),
    height: layout.heightPixel(60),
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
});
