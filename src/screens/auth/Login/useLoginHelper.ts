import {useState} from 'react';
import {useRecoilState} from 'recoil';

import {LoginFormData, users} from '@constants';
import {keys, userAtom} from '@store';
import {loginApi} from '@utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const useLoginHelper = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [_, setUser] = useRecoilState(userAtom);

  const initialValues: LoginFormData = {
    username: '',
    password: '',
  };

  const loginMutation = async (values: LoginFormData) => {
    setIsLoading(true);
    try {
      await loginApi(values);
      setIsLoading(false);
      await AsyncStorage.setItem(
        keys.userState,
        JSON.stringify({
          isSignOut: false,
        }),
      );
      setUser((value) => ({
        ...value,
        isSignOut: false,
      }));
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'invalid credentials provided', [
        {
          text: 'Try again',
        },
      ]);
    }
  };

  return {
    initialValues,
    isLoading,
    loginMutation,
  };
};
