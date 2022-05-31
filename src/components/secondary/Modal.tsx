import React, { memo, useMemo } from 'react';
import { View, Modal as BaseModal, StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ModalProps = BaseModal['props'] & {
  children: React.ReactNode;
  visible?: boolean;
  opacity?: number;
};

export const Modal = memo(({ children, visible = false, opacity = 0.6 }: ModalProps) => {
  const insets = useSafeAreaInsets();
  const modalStyle = useMemo(() => ({ paddingBottom: insets.bottom }), [insets.bottom]);

  return (
    <BaseModal animationType="slide" visible={visible} transparent style={modalStyle}>
      <View style={[styles.backdrop, { backgroundColor: `rgba(0,0,0,${opacity})` }]}>
        {children}
      </View>
    </BaseModal>
  );
});

const styles = StyleSheet.create({
  backdrop: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
