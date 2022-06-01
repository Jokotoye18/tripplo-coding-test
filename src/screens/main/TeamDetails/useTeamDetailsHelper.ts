import {useRoute} from '@react-navigation/native';
import {TeamDetailsScreenRouteProp} from 'navigations/types';

export const useTeamDetailsHelper = () => {
  const {params} = useRoute<TeamDetailsScreenRouteProp>();
  const team = params.team;

  return {team};
};
