import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from '@components';
import {globalStyles} from '@globalStyles';
import {ITeam} from '@models';
import {colors, layout} from '@constants';

type TeamDetailsCardProps = {
  team: ITeam;
};

const a = {};

export const TeamDetailsCard = ({team}: TeamDetailsCardProps) => {
  const infos = {
    Location: team.location,
    'Display name': team.displayName,
    Abbreviation: team.abbreviation,
    'Is Active': team.isActive,
  };

  return (
    <View style={styles.container}>
      {Object.entries(infos).map(([key, value]) => {
        return (
          <View key={key} style={[globalStyles.rowBetween, styles.item]}>
            <View style={styles.keyBox}>
              <Text text={key} fontSize={13} color={colors.primaryColorDark} />
            </View>
            <View style={[styles.valueBox, globalStyles.rowEnd]}>
              {typeof value === 'string' ? (
                <Text
                  text={value}
                  fontWeight="500"
                  color={colors.primaryColorDark}
                />
              ) : (
                <Text text={`${value}`} color={colors.primaryColorDark} />
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(30),
    backgroundColor: colors.secondaryColorLight,
    paddingVertical: layout.fontPixel(20),
    paddingHorizontal: layout.pixelSizeHorizontal(15),
    borderRadius: layout.fontPixel(5),
  },
  keyBox: {
    flexBasis: '30%',
  },
  valueBox: {
    flexBasis: '68%',
  },
  item: {
    marginBottom: layout.pixelSizeVertical(10),
  },
});
