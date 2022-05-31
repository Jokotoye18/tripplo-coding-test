import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainerComponent} from './navigations/NavigationContainerComponent';
import {colors} from '@constants';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primaryBg} />
      <NavigationContainerComponent />
    </SafeAreaProvider>
  );
};

export default () => {
  return <App />;
};
