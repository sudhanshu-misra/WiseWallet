import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CashForm} from './Form/CashForm';
import {COLORS} from '../../../constants/theme';
import { CardForm } from './Form/CardForm';
import { UpiWalletForm } from './Form/UpiWalletForm';

const WalletForm = ({hideModal, onSubmit}) => {
  const [activeWallet, setActiveWallet] = useState('Cash');

  const cashFormHandler = () => {
    setActiveWallet('Cash');
  };
  const cardFormHandler = () => {
    setActiveWallet('Card');
  };
  const upiWalletFormHandler = () => {
    setActiveWallet('UpiWallet'); 
  };

  return (
    <ScrollView>
      <View className="flex m-4 flex-row justify-center">
        <Text className={`text-black  text-lg text-center`}>
          Payment Methods{' '}
        </Text>
        <Text className="absolute right-4">
          {' '}
          <Icon name="close" size={25} onPress={hideModal}></Icon>
        </Text>
      </View>

      <View className="flex flex-row justify-evenly ">
        <Text
          className="text-lg"
          onPress={cashFormHandler}
          style={
            activeWallet === 'Cash' && {
              color: COLORS.primary,
              fontWeight: 'bold',
            }
          }>
          Cash
        </Text>
        <Text
          className="text-lg"
          onPress={cardFormHandler}
          style={
            activeWallet === 'Card' && {
              color: COLORS.primary,
              fontWeight: 'bold',
            }
          }>
          Card
        </Text>
        <Text
          className="text-lg"
          onPress={upiWalletFormHandler}
          style={
            activeWallet === 'UpiWallet' && {
              color: COLORS.primary,
              fontWeight: 'bold',
            }
          }>
          Upi Wallet
        </Text>
      </View>

      <View className="mt-2">
        {activeWallet === 'Cash' && <CashForm closeModal={onSubmit}></CashForm>}
        {activeWallet === 'Card' && <CardForm closeModal={onSubmit}></CardForm>}
        {activeWallet === 'UpiWallet' && (
          <UpiWalletForm closeModal={onSubmit}></UpiWalletForm>
        )}

      </View>

      <View className="mt-10"></View>
    </ScrollView>
  );
};

export default WalletForm;
