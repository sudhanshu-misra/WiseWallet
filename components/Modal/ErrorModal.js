import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/theme';
import errorIcon from '../../assets/errorIcon.png';

const ErrorModal = ({modalState, hideModal, modalMessage}) => {
  const navigation = useNavigation();
  return (
    <Modal
      visible={modalState}
      transparent={true}
      animationType="fade"
      onRequestClose={() => hideModal}>
      <View style={styles.modalContent}>
        <View>
          <View className="flex-1 justify-center items-center gap-3">
            <Avatar.Image
              source={errorIcon}
              size={65}
              style={{marginTop: 5, backgroundColor: 'white'}}
            />
            <Text style={{color: COLORS.error}} className="text-3xl font-bold">
              Failed
            </Text>
          </View>
          <Text className="mt-5 text-center font-bold text-xl px-10">
            {modalMessage}
          </Text>
          {/* <View className="border-2 rounded-md mx-4 h-max my-5 p-5">
            <Text>Category,date,amount data</Text>
          </View> */}
          <Button
            style={{
              backgroundColor: COLORS.error,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={hideModal}
            className="mx-10 p-1">
            <Text className="font-bold text-white text-xl">Try again</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

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

export default ErrorModal;
