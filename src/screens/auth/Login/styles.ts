import {StyleSheet} from 'react-native';

import {layout} from '@constants';

export const styles = StyleSheet.create({
  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: layout.heightPixel(150),
    height: layout.heightPixel(150),
    borderRadius: layout.heightPixel(150) / 2,
    backgroundColor: '#eee',
  },
  icon: {
    flex: 1,
    borderRadius: layout.heightPixel(150) / 2,
  },
  form: {
    flex: 0.6,
  },
  btn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: layout.pixelSizeVertical(50),
    // paddingHorizontal: layout.pixelSizeHorizontal(15),
    zIndex: 1000,
  },
});
