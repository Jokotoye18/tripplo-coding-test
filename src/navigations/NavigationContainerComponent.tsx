import React from 'react';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {AuthStackNavigator} from './AuthStackNavigator';

import {RootStackNavigator} from './RootStackNavigator';
import {RootStackParamList} from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const NavigationContainerComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {false ? <AuthStackNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
};
