import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '@screens';
import {AuthStackParamList} from './types';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
