import {LoginFormData} from '@constants';

export const useLoginHelper = () => {
  const initialValues: LoginFormData = {
    username: '',
    password: '',
  };

  return {
    initialValues,
  };
};
