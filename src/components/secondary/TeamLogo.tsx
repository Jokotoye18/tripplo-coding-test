import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {SharedElement} from 'react-navigation-shared-element';

import {layout} from '@constants';

type TeamLogoProps = {
  id: string;
  uri: string;
  size?: number;
};

export const TeamLogo = ({id, uri, size = 50}: TeamLogoProps) => {
  return (
    <View
      style={[
        styles.imgBox,
        {
          width: layout.heightPixel(size),
          height: layout.heightPixel(size),
        },
      ]}
    >
      <SharedElement id={`team.${id}.logo`} style={{flex: 1}}>
        <Image source={{uri}} style={styles.img} />
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBox: {
    borderRadius: layout.heightPixel(50) / 2,
    marginRight: layout.pixelSizeHorizontal(15),
  },
  img: {
    flex: 1,
  },
});
