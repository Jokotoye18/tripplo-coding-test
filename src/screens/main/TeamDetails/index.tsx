import React from 'react';

import {Container, TeamDetailsCard, TeamLogo, TeamStats} from '@components';
import {useTeamDetailsHelper} from './useTeamDetailsHelper';
import {View} from 'react-native';
import {globalStyles} from '@globalStyles';

export const TeamDetails = () => {
  const {team} = useTeamDetailsHelper();
  return (
    <Container>
      <TeamDetailsCard team={team.team} />
      <TeamStats stat={team.stats} />
      <View style={[globalStyles.rowCenter, {flex: 1}]}>
        <TeamLogo id={team.team.id} size={200} uri={team.team.logos[0].href} />
      </View>
    </Container>
  );
};
