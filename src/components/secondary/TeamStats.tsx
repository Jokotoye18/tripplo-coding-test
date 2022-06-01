import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from '@components';
import {colors, layout} from '@constants';
import {IStat} from '@models';
import {globalStyles} from '@globalStyles';

type TeamStatsProps = {
  stat: IStat[];
};

export const TeamStats = ({stat}: TeamStatsProps) => {
  const statInfo = {
    Wins: stat[0].value,
    Losses: stat[1].value,
    Draws: stat[2].value,
  };
  return (
    <View>
      <Text
        text="Stats"
        color={colors.primaryColorDark}
        textAlign="center"
        fontSize={20}
        fontWeight="500"
      />
      <View>
        {Object.entries(statInfo).map(([key, value]) => {
          return (
            <View key={key} style={[globalStyles.rowBetween, styles.item]}>
              <View style={styles.keyBox}>
                <Text text={key} />
              </View>
              <View style={[styles.valueBox, globalStyles.rowEnd]}>
                {typeof value === 'string' ? (
                  <Text text={value} />
                ) : (
                  <Text text={`${value}`} />
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyBox: {
    flexBasis: '40%',
  },
  valueBox: {
    flexBasis: '55%',
  },
  item: {
    marginBottom: layout.pixelSizeVertical(10),
  },
});
