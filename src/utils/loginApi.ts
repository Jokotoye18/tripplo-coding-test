import {LoginFormData, users} from '@constants';

export const loginApi = (values: LoginFormData): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.users.find(
        (user) =>
          user.password === values.password &&
          user.username === values.username,
      );
      if (user) {
        resolve('Login successfully');
      } else {
        reject('Login failed');
      }
    }, 2000);
  });
};
