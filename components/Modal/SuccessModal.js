import {View, Text} from 'react-native';
import React,{useState} from 'react';
import {Modal} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import successIcon from '../../assets/successful.png';
import {Avatar} from 'react-native-paper';
import {COLORS} from '../../constants/theme';

export default function SuccessModal({modalState,hideModal}) {

  return (
    <Modal visible={modalState} transparent={true} animationType="slide"
    >
      <View style={styles.modalContent}>
        <View>
          <View className="flex-1 justify-center items-center gap-3">
            <Avatar.Image
              source={successIcon}
              size={65}
              style={{marginTop: 5, backgroundColor: 'white'}}
            />
            <Text
              style={{color: COLORS.success}}
              className="text-3xl font-bold">
              Successful
            </Text>
          </View>
          <Text className="mt-5 text-center font-bold text-xl px-10">Your expense has been successfully added to transactions</Text>
          <View className="border-2 rounded-md mx-4 h-max my-5 p-5">
            <Text>Category,date,amount data</Text>
          </View>
          <Button
            style={{
              backgroundColor: COLORS.success,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={hideModal}
            className="mx-10 p-1">
            <Text className="font-bold text-white text-xl">Done</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: 'max',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    paddingVertical: 35,
    bottom: 0,
  },
});
