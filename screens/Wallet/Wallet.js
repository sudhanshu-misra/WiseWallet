import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import WalletForm from './WalletForm/WalletForm';
import StatusModal from '../../components/Modal/StatusModal';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';
import {COLORS} from '../../constants/theme';

export default function WalletHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });
  // this is the data fetched from the backend
  const [walletData, setWalletData] = useState({});

  const walletHandler = () => {
    SetModalVisible(true);
  };

  const onSubmit = async () => {
    SetModalVisible(false);
    const data = await getWallet();
    setWalletData(data.wallets);
  };

  const getWallet = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/wallet/get-wallets`,
        config,
      );
      console.log(response.data.wallets);
      setWalletData(response.data.wallets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  let card = [];
  let paytm = [];
  let paytm_amount = 0;
  let gpay = [];
  let gpay_amount = 0;
  let phonepe = [];
  let phonepe_amount = 0;
  let cash_amount = 0;

  if (walletData.length > 0) {
    //Cash
    cash_amount = walletData
      ?.filter(item => item.type === 'cash')
      .reduce((acc, item) => acc + item.amount, 0);

    //Upi
    let upi = walletData?.filter(item => item.type === 'upi');

    phonepe = upi?.filter(item => item.walletCategory === 'Phonepe');
    phonepe_amount = phonepe.reduce((acc, item) => acc + item.amount, 0);

    gpay = upi?.filter(item => item.walletCategory === 'Gpay');
    gpay_amount = gpay.reduce((acc, item) => acc + item.amount, 0);

    paytm = upi?.filter(item => item.walletCategory === 'Paytm');
    paytm_amount = paytm.reduce((acc, item) => acc + item.amount, 0);

    //  Card
    card = walletData?.filter(item => item.type === 'card');
  }

  return (
    <MenuProvider>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          <CustomHeader navigation={navigation} />
          <View className="mt-5 mx-7 flex flex-row justify-between">
            <Text className="text-xl text-black">Payment Methods</Text>
            <Text
              className="text-lg"
              style={{color: `${COLORS.neutral}`}}
              onPress={() => walletHandler()}>
              <Icon name="plus" size={17}>
                {' '}
              </Icon>{' '}
              Add new{' '}
            </Text>
          </View>

          {walletData?.length == 0 && (
            <DashboardSharedUI
              name="Payment Methods"
              icon="credit-card"
              onClick={walletHandler}></DashboardSharedUI>
          )}

          {walletData?.length > 0 && (
            <View className="my-5 h-full px-10 flex">
              {/* Cash */}
              <View className="h-max rounded-xl p-5 mt-4 bg-[#ECFFDA]">
                <Text className="text-lg text-[#277320]">Cash</Text>
                <Text className="text-lg">Amount : Rs.{cash_amount}</Text>
              </View>
              {/*UPI */}
              <View className="h-max rounded-xl p-5 mt-4  bg-[#ECFFDA]">
                <Text className="text-lg text-[#277320]">UPI</Text>
                <View className="mt-1">
                  <View className=" rounded-xl px-3 py-1 mt-[8px] ">
                    <Text className="text-lg text-black">GPay</Text>
                    <Text className="text-lg">Amount : Rs.{gpay_amount}</Text>
                  </View>
                  <View className="rounded-xl px-3 py-1 mt-[8px]">
                    <Text className="text-lg text-black">PhonePe</Text>
                    <Text className="text-lg">
                      Amount : Rs.{phonepe_amount}
                    </Text>
                  </View>
                  <View className=" rounded-xl px-3 py-1 mt-[8px]">
                    <Text className="text-lg text-black">Paytm</Text>
                    <Text className="text-lg">Amount : Rs.{paytm_amount}</Text>
                  </View>
                </View>
              </View>
              {/*Card  */}
              {card.map(item => {
                return (
                  <View
                    key={item._id}
                    className="h-max rounded-xl p-5 mt-4 bg-white">
                    <Text className="text-lg text-black">Card</Text>
                    <Text className="text-lg">Bank name :{item.bankName}</Text>
                    <Text className="text-lg">
                      Card number :{item.cardNumber}
                    </Text>
                    <Text className="text-lg">Amount : Rs.{item.amount}</Text>
                    <Text className="text-lg">Expiry : 04/26</Text>
                  </View>
                );
              })}
            </View>
          )}

          <Modal
            modalState={isModalVisible}
            hideModal={() => SetModalVisible(false)}>
            <WalletForm
              hideModal={() => SetModalVisible(false)}
              onSubmit={onSubmit}></WalletForm>
          </Modal>

          {walletData && (
            <StatusModal
              modalType={statusVisible.modaltype}
              modalState={statusVisible.visibility}
              hideModal={() =>
                SetstatusVisible(prev => {
                  return {visibility: false, modaltype: prev.modaltype};
                })
              }
              message={
                (statusVisible.modaltype === 'failed' &&
                  'Failed to add wallet ....') ||
                (statusVisible.modaltype === 'success' &&
                  'Wallet added successfully')
              }
              formData={walletData}></StatusModal>
          )}
        </View>
      </ScrollView>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 7,
    marginLeft: -35,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -15,
  },
});
