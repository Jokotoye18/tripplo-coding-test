import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot, useRecoilState} from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {NavigationContainerComponent} from './navigations/NavigationContainerComponent';
import {colors} from '@constants';
import {keys, userAtom} from '@store';

const App = () => {
  const [_, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const bootstrapApp = async () => {
      const user = await AsyncStorage.getItem(keys.userState);
      if (user) {
        const {isSignOut}: {isSignOut: boolean} = JSON.parse(user);
        setUser((value) => ({
          ...value,
          isSignOut,
        }));
      } else {
        setUser((value) => ({
          ...value,
          isSignOut: true,
        }));
      }
    };
    bootstrapApp().then(() => {
      SplashScreen.hide();
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primaryBg} />
      <NavigationContainerComponent />
    </SafeAreaProvider>
  );
};

export default () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};
