import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Button,
  Error,
  Loader,
  SafeAreaView,
  SeasonCard,
  TeamCard,
  Text,
} from '@components';
import {globalStyles} from '@globalStyles';
import {useHomeHelper} from './useHomeHelper';
import {styles} from './styles';
import {HomeScreenNavigationProp} from 'navigations/types';
import {layout} from '@constants';

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {
    season,
    isLoading,
    error,
    navigateTeamDetails,
    handleLogout,
    fetchSeasons,
  } = useHomeHelper();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Logout"
          outlined
          containerStyle={{
            marginRight: globalStyles.container.paddingHorizontal,
          }}
          style={{
            width: layout.widthPixel(100),
            height: layout.heightPixel(40),
          }}
          onPress={handleLogout}
        />
      ),
    });
  }, []);

  if (isLoading) {
    return <Loader visible={true} />;
  }

  if (error) {
    return <Error error={error} handleRetry={fetchSeasons} />;
  }

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']}>
      {season ? <SeasonCard season={season} /> : null}
      <FlatList
        data={season?.standings || []}
        keyExtractor={(item) => item.team.id}
        renderItem={({item}) => (
          <TeamCard team={item} navigateTeamDetails={navigateTeamDetails} />
        )}
        contentContainerStyle={[globalStyles.container, styles.standings]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
