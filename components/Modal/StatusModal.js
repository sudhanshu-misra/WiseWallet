import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import successIcon from '../../assets/successful.png';
import {Avatar} from 'react-native-paper';
import {COLORS} from '../../constants/theme';
import errorIcon from '../../assets/errorIcon.png';
import loading from '../../assets/loading.jpg'


export default function StatusModal({
  modalState,
  hideModal,
  formData,
  message,
  modalType
}) {
  // let custom_message = '';
  // if ('TransactionName' in formData) {
  //   custom_message = 'Your expense has been successfully added to transactions';
  // } else if ('IncomeName' in formData) {
  //   custom_message = 'Your income has been successfully added to earnings';
  // } else if ('BudgetName' in formData) {
  //   custom_message = 'Your budget has been successfully added to budgets';
  // } else if ('GoalName' in formData) {
  //   custom_message = 'Your goal has been successfully added to goal';
  // } else if ('WalletName' in formData) {
  //   custom_message =
  //     'Your wallet details has been successfully added to the wise wallet';
  // } else if ('CashAmount' in formData) {
  //   custom_message =
  //     'Your cash details has been successfully added to the wise wallet';
  // } else if ('CardAmount' in formData) {
  //   custom_message =
  //     'Your card details has been successfully added to the wise wallet';
  // }

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
            {modalType === 'failed' &&
              <Avatar.Image
                source={errorIcon}
                size={65}
                style={{marginTop: 5, backgroundColor: 'white'}}
              />
            }
            {
                  modalType==="success" &&  <Avatar.Image
                source={successIcon}
                size={65}
                style={{marginTop: 5, backgroundColor: 'white'}}
              />
            }
            {
              modalType==="loader" &&  <Avatar.Image
                source={loading}
                size={65}
                style={{color:"green",marginTop: 5, backgroundColor: 'white'}}
              />
            }
              
            
            
            <Text
              style={modalType==="failed"?{color:"red"}   : {color: COLORS.success}}
              className="text-3xl font-bold">
              {modalType=="loader" && "Loading"}
              {modalType === 'failed' && "Failed"}
              {modalType==="success" && "Successfull"}
            </Text>
          </View>
          <Text className="mt-5 text-center font-bold text-xl px-10">
            { message}
          </Text>
          {/* {custom_message && (
            <View className="border-2 rounded-md mx-4 h-max my-5 p-5">
              <Text>Category,date,amount data</Text>
            </View>
          )} */}
        { modalType!=="loader" && <TouchableOpacity onPress={hideModal}>
            <Button
              style={{
                backgroundColor: COLORS.success,
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
              }}
              className="mx-10 p-1 mt-2">
              <Text className="font-bold text-white text-xl">Done</Text>
            </Button>
          </TouchableOpacity>
        }
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
