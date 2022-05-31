import React from 'react';
import {View} from 'react-native';

import {SafeAreaView, Text} from '@components';

export const Home = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <View>
        <Text text="Home" />
      </View>
    </SafeAreaView>
  );
};
