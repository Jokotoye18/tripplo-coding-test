import React, { ComponentProps, memo } from 'react';

import { SafeAreaView as BaseSafeAreaView, Edge } from 'react-native-safe-area-context';
import { globalStyles } from '@globalStyles';

type SafeAreaViewProps = ComponentProps<typeof BaseSafeAreaView> & {
  children: React.ReactNode;
  edges?: readonly Edge[];
};

export const SafeAreaView = memo(({ children, edges }: SafeAreaViewProps) => {
  return (
    <BaseSafeAreaView edges={edges ? edges : ['left', 'right']} style={globalStyles.wrapper}>
      {children}
    </BaseSafeAreaView>
  );
});
