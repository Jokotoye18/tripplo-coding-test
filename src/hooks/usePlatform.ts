import {Platform} from 'react-native';

export const usePlatform = () => {
  return {
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
  };
};
