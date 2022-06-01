import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

import LottieView from 'lottie-react-native';

import {loader} from '@assets';

import {Modal} from './Modal';
import {colors} from '@constants';

type LoaderProps = {
  visible: boolean;
};

export const Loader = memo(({visible}: LoaderProps) => {
  return (
    <Modal visible={visible} opacity={0.6}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <LottieView
          source={loader}
          autoPlay
          loop
          style={{width: 100, height: 100}}
        /> */}
        <ActivityIndicator animating size="large" color={colors.primaryBg} />
      </View>
    </Modal>
  );
});
