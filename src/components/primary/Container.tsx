import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import {globalStyles} from '@globalStyles';

type ContainerProps = ScrollView['props'] & {
  children: React.ReactNode;
};

export const Container = memo(({children, ...rest}: ContainerProps) => {
  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </ScrollView>
  );
});
