import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import successIcon from '../../assets/successful.png';
import {Avatar} from 'react-native-paper';
import {COLORS} from '../../constants/theme';

export default function SuccessModal({modalState, hideModal, formData}) {
  // console.log(formData);
  let message = '';
  if ('TransactionName' in formData) {
    message = 'Your expense has been successfully added to transactions';
  } else if ('IncomeName' in formData) {
    message = 'Your income has been successfully added to earnings';
  } else if ('BudgetName' in formData) {
    message = 'Your budget has been successfully added to budgets';
  } else if ('GoalName' in formData) {
    message = 'Your goal has been successfully added to goal';
  }
  else if( 'walletName' in formData){
    message = 'Your wallet details has been successfully added to the wise wallet';
  }
  else if( 'cashAmount' in formData){
    message = 'Your cash details has been successfully added to the wise wallet';
  }
  else if( 'cardAmount' in formData){
    message = 'Your card details has been successfully added to the wise wallet';
  }

  return (
    <Modal
      visible={modalState}
      transparent={true}
      animationType="fade"
      onRequestClose={() => hideModal}>
      {/* background black */}
      <View
        style={{backgroundColor: 'rgba(52, 52, 52, 0.6)'}}
        className="flex-1 w-full"></View>
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
          <Text className="mt-5 text-center font-bold text-xl px-10">
            {message}
          </Text>
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
