import {StyleSheet} from 'react-native';

import {layout} from '@constants';

export const styles = StyleSheet.create({
  standings: {},
  logoutBtn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: layout.pixelSizeVertical(40),
    // paddingHorizontal: layout.pixelSizeHorizontal(15),
    zIndex: 1000,
  },
});
