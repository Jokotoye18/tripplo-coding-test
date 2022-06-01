import React from 'react';
import {View, Image} from 'react-native';

import {Button, Input, Loader, SafeAreaView} from '@components';
import {globalStyles} from '@globalStyles';
import {useFormik} from 'formik';
import {icons, LoginSchema} from '@constants';
import {useLoginHelper} from './useLoginHelper';
import {styles} from './styles';

export const Login = () => {
  const {initialValues, isLoading, loginMutation} = useLoginHelper();

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        await loginMutation(values);
      },
    });

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <Loader visible={isLoading} />
      <View style={globalStyles.container}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: icons.logo,
              }}
              style={styles.icon}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.form}>
          <Input
            label="Username"
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            placeholder="Enter Username"
            error={touched.username ? errors?.username : undefined}
          />
          <Input
            label="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Enter password"
            error={touched.password ? errors?.password : undefined}
            isPassword
          />
          <Button
            title="Login"
            containerStyle={styles.btn}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
