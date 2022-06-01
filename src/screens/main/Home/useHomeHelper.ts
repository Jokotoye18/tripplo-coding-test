import {useNavigation} from '@react-navigation/native';

import {useSeasonQuery} from '@hooks';
import {IStanding} from '@models';

import {HomeScreenNavigationProp} from 'navigations/types';
import {useRecoilState} from 'recoil';
import {keys, userAtom} from '@store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useHomeHelper = () => {
  const {data, isLoading, error, fetchSeasons} = useSeasonQuery();
  const [_, setUser] = useRecoilState(userAtom);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateTeamDetails = (team: IStanding) => {
    navigation.navigate('TeamDetails', {
      team,
    });
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem(
      keys.userState,
      JSON.stringify({
        isSignOut: true,
      }),
    );
    setUser((value) => ({
      ...value,
      isSignOut: true,
    }));
  };

  return {
    season: data,
    isLoading,
    error,
    navigateTeamDetails,
    handleLogout,
    fetchSeasons,
  };
};
