import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Text as BaseText,
  ActivityIndicator,
} from 'react-native';

import {Text} from './Text';
import {useSecureTextEntry} from '@hooks';
import {colors, icons, layout} from '@constants';
import {globalStyles} from '@globalStyles';

type InputProps = TextInput['props'] & {
  label?: string;
  info?: string;
  error?: string;
  required?: boolean;
  height?: number;
  isPassword?: boolean;
  isLoading?: boolean;
  isPhoneNumber?: boolean;
  editable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
};

export const Input = memo(
  ({
    label,
    info,
    error,
    required = true,
    isPassword = false,
    height = layout.heightPixel(55),
    isPhoneNumber,
    isLoading,
    editable = true,
    containerStyle,
    style,
    ...rest
  }: InputProps) => {
    const {secureTextEntry, toggleEntry} = useSecureTextEntry(isPassword);

    return (
      <View style={styles.wrapper}>
        {label ? (
          <BaseText style={{paddingBottom: layout.pixelSizeVertical(10)}}>
            <Text
              text={label}
              color={colors.primaryColorDark}
              fontSize={16}
              style={styles.label}
            />
            {required ? <Text text=" *" color={'red'} fontSize={16} /> : null}
          </BaseText>
        ) : null}
        <View
          style={[
            styles.container,
            globalStyles.rowBetween,
            {
              height,
              backgroundColor: editable === true ? '#fff' : '#eeeeee',
            },
            containerStyle,
          ]}
        >
          {isPhoneNumber ? (
            <Text text="+234  " fontSize={18} style={styles.text} />
          ) : null}
          <TextInput
            placeholderTextColor={colors.borderColor}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading && editable}
            style={[styles.input, {height}, style]}
            {...rest}
          />
          {isLoading ? (
            <View style={{marginLeft: layout.pixelSizeHorizontal(10)}}>
              <ActivityIndicator size="small" color={colors.secondaryBg} />
            </View>
          ) : null}
          {isPassword && !isLoading ? (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{marginLeft: layout.pixelSizeHorizontal(10)}}
              onPress={toggleEntry}
            >
              <icons.Ionicons
                name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                size={25}
                color={colors.borderColor}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {error ? (
          <Text
            text={error}
            color="tomato"
            fontSize={13}
            textAlign="right"
            style={globalStyles.error}
          />
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: layout.fontPixel(20),
  },
  container: {
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    borderRadius: 3,
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  input: {
    flex: 1,
    fontSize: layout.fontPixel(18),
    color: colors.primaryColorLight,
    fontWeight: '400',
    // fontFamily: 'ProductSans-Regular',
  },
  label: {
    paddingBottom: layout.pixelSizeVertical(10),
  },
  text: {
    fontSize: layout.fontPixel(18),
    color: colors.secondaryColor,
  },
  info: {
    paddingTop: layout.pixelSizeVertical(10),
  },
});
