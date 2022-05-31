import React, {memo, useMemo} from 'react';
import {ColorValue, StyleProp, Text as BaseText, TextStyle} from 'react-native';
import {colors, layout} from '@constants';
import {usePlatform} from '@hooks';

type TextProps = BaseText['props'] & {
  text: string;
  color?: ColorValue;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  fontSize?: number;
  // fontFamily?:
  //   | 'ProductSans-Black'
  //   | 'ProductSans-Bold'
  //   | 'ProductSans-Light'
  //   | 'ProductSans-Regular'
  //   | 'ProductSans-Medium';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: StyleProp<TextStyle>;
};

export const Text = memo(
  ({
    text,
    color = colors.primaryColorLight,
    textAlign = 'left',
    fontSize = 16,
    fontWeight = '400',
    // fontFamily = 'ProductSans-Regular',
    style,
    ...rest
  }: TextProps) => {
    const isAndroid = usePlatform();
    const plusFontSize = isAndroid ? 0 : 0;

    const styles = useMemo(
      () => ({
        color,
        textAlign,
        fontSize: layout.fontPixel(fontSize + plusFontSize),
        fontWeight,
      }),
      [color, textAlign, fontSize, fontWeight, plusFontSize],
    );

    return (
      <BaseText style={[styles, style]} {...rest}>
        {text}
      </BaseText>
    );
  },
);
