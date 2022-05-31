import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Home, TeamDetails} from '@screens';
import {RootStackParamList} from './types';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="TeamDetails" component={TeamDetails} />
    </RootStack.Navigator>
  );
};
