import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ISeason} from '@models';
import {Text} from '@components';
import {globalStyles} from '@globalStyles';
import {colors, layout} from '@constants';

type SeasonCardProps = {
  season: ISeason;
};

export const SeasonCard = ({season}: SeasonCardProps) => {
  const {name, season: seasonYear} = season;
  return (
    <View style={[styles.container]}>
      <Text
        text={name}
        fontWeight="700"
        fontSize={25}
        color={colors.primaryColorDark}
      />
      <Text
        text={`${seasonYear} Season`}
        fontSize={20}
        color={colors.primaryColorDark}
        style={styles.year}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: globalStyles.container.paddingHorizontal,
    marginVertical: layout.pixelSizeVertical(30),
  },
  year: {
    paddingTop: layout.pixelSizeVertical(10),
  },
});
