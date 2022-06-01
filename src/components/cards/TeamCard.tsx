import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {IStanding} from '@models';
import {Text, TeamLogo} from '@components';
import {colors, layout} from '@constants';
import {globalStyles} from '@globalStyles';

type TeamCardProps = {
  team: IStanding;
  navigateTeamDetails: (team: IStanding) => void;
};

export const TeamCard = memo(({team, navigateTeamDetails}: TeamCardProps) => {
  const {
    team: {name, id, logos},
    note,
    stats,
  } = team;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {backgroundColor: note?.color || 'transparent'},
      ]}
      onPress={() => navigateTeamDetails(team)}
    >
      <View style={globalStyles.rowBetween}>
        <TeamLogo id={id} uri={logos[0].href} />
        <View style={{flex: 1}}>
          <Text
            text={name}
            fontWeight="500"
            fontSize={16}
            color={colors.primaryColorDark}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.pixelSizeVertical(20),
    padding: layout.pixelSizeVertical(5),
    borderRadius: layout.fontPixel(5),
  },
});
