import {StyleSheet} from 'react-native';
import {colors, layout} from '@constants';

export const globalStyles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: colors.primaryBg},
  container: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    flexGrow: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  error: {
    paddingTop: layout.pixelSizeVertical(5),
  },
});
