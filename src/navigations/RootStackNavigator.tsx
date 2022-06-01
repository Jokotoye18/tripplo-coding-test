import React from 'react';

import {CardStyleInterpolators} from '@react-navigation/stack';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SharedElement} from 'react-navigation-shared-element';

import {Home, TeamDetails} from '@screens';
import {RootStackParamList} from './types';
import {TeamLogo} from '@components';
import {colors, layout} from '@constants';

const RootStack = createSharedElementStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTintColor: colors.secondaryColor,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}
    >
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShadowVisible: true,
          headerStyle: {
            height: layout.heightPixel(100),
          },
        }}
      />
      <RootStack.Screen
        name="TeamDetails"
        component={TeamDetails}
        options={({route}) => ({
          title: route.params.team.team.name,
          // animationEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerRight: () => {
            return (
              <TeamLogo
                id={route.params.team.team.id}
                uri={route.params.team.team.logos[0].href}
                size={35}
              />
            );
          },
        })}
        sharedElements={(route, otherRoute, showing) => {
          const {id} = route.params.team.team;
          return [
            {
              id: `team.${id}.logo`,
              animation: 'move',
              resize: 'clip',
              align: 'center-bottom',
            },
          ];
        }}
      />
    </RootStack.Navigator>
  );
};
