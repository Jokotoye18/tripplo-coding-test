import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom} from 'recoil';

import {keys} from './keys';

// const localStorageEffect =
//   (key: string) =>
//   ({setSelf, onSet}) => {
//     AsyncStorage.getItem(key)
//       .then((savedValue) => {
//         if (savedValue != null) {
//           setSelf(JSON.parse(savedValue));
//         }
//         onSet((newValue, _, isReset) => {
//           isReset
//             ? AsyncStorage.removeItem(key)
//             : AsyncStorage.setItem(key, JSON.stringify(newValue));
//         });
//       })
//       .catch(() => {});
//   };

export const userAtom = atom({
  key: keys.userState,
  default: {
    isLoading: false,
    isSignOut: false,
  },
  // effects: [localStorageEffect(keys.userState)],
});
