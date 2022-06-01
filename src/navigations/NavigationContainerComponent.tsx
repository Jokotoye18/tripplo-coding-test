import React from 'react';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {useRecoilState, useRecoilValue} from 'recoil';

import {AuthStackNavigator} from './AuthStackNavigator';
import {RootStackNavigator} from './RootStackNavigator';
import {RootStackParamList} from './types';
import {userAtom, keys} from '@store';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const NavigationContainerComponent = () => {
  const user = useRecoilValue(userAtom);
  return (
    <NavigationContainer ref={navigationRef}>
      {user.isSignOut ? <AuthStackNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
};
