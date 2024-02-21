import {View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {StyleSheet} from 'react-native';

export default function SharedModal({modalState, children}) {
  return (
    <Modal visible={modalState} transparent={true} animationType="slide">
      <View style={styles.modalContent}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
    bottom: 0,
  },
});
