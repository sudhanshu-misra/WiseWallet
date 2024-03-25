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
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';

const exampleDate = '2024-03-05';
// CASH
const balance = 320;

// CARD
const cardDetails = {
  bankname: 'State Bank of India',
  cardnumber: '1234 5678 9012 3456',
  expirydate: '12/25',
  balance: 5000,
};

//UPI-WALLET
const upiDetails = {
  app: 'Gpay',
  balance: 3000,
};

export default function WalletHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });
  // this is the data fetched from the backend
  const [walletData, setwalletData] = useState({});

  const walletHandler = () => {
    SetModalVisible(true);
  };

  const onSubmit = async () => {
    SetModalVisible(false);
    //data extraction here
    const data = await getWallet();

    setwalletData(data.wallets);

    //  console.log(" fetched wallet data : ",data.wallets);

    //staus modal should not be here as it will always receives the data and show success status
    if (data) {
      //success modal
      SetstatusVisible({visibility: true, modaltype: 'success'});
    } else {
      //failure modal here
      SetstatusVisible({visibility: true, modaltype: 'failed'});
    }
  };

  useEffect(() => {
    const data = getWallet();
    //  console.log(data);
    setwalletData(data.wallets);
  }, []);

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
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MenuProvider>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          <CustomHeader navigation={navigation} />

          <DashboardSharedUI
            name="Payment Methods"
            icon="credit-card"
            onClick={walletHandler}></DashboardSharedUI>

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

          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 5,
              marginBottom: 10,
            }}>
            CASH
          </Text>

          <Text
            style={{
              textAlign: 'left',
              fontSize: 17,
              marginLeft: 20,
              marginTop: 5,
              marginBottom: 10,
            }}>
            Balance: Rs {balance}
          </Text>

          {/* <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            <View style={{ flex: 1, height: 70, padding: 22, margin: 8, borderWidth: 1.5, borderColor: '#6B7280', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.dateText}>{exampleDate}</Text>
              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View> */}
          {/* 
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            <View style={{ flex: 1, height: 70, padding: 22, margin: 8, borderWidth: 1.5, borderColor: '#6B7280', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.dateText}>{exampleDate}</Text>
              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View> */}

          {/* <TouchableOpacity onPress={() => navigation.navigate('Cash')} style={{ backgroundColor: 'white', padding: 3, borderRadius: 5 }}>
            <Text style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>View All</Text>
          </TouchableOpacity> */}
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 2,
            marginBottom: 10,
          }}>
          CARD
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              marginLeft: 7,
              marginTop: 0,
              marginBottom: 0,
            }}>
            Bank Name: {cardDetails.bankname}
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
              marginTop: 0,
              marginRight: 4,
              marginBottom: 10,
            }}>
            Expiry Date:{' '}
            <Text style={{color: 'green'}}>{cardDetails.expirydate} </Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              marginLeft: 7,
              marginTop: 0,
              marginBottom: 0,
            }}>
            Card Number: {cardDetails.cardnumber}
          </Text>

          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
              marginTop: 0,
              marginRight: 7,
              marginBottom: 10,
            }}>
            Balance:{' '}
            <Text style={{color: 'green'}}>Rs {cardDetails.balance}</Text>
          </Text>
        </View>

        {/*  
<View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            <View style={{ flex: 1, height: 70, padding: 22, margin: 8, borderWidth: 1.5, borderColor: '#6B7280', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.dateText}>{exampleDate}</Text>
              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            <View style={{ flex: 1, height: 70, padding: 22, margin: 8, borderWidth: 1.5, borderColor: '#6B7280', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.dateText}>{exampleDate}</Text>
              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
        
  <TouchableOpacity onPress={() => navigation.navigate('Card')} style={{ backgroundColor: 'white', padding: 3, borderRadius: 5 }}>
            <Text style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>View All</Text>
          </TouchableOpacity>
</View> */}

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 10,
            marginBottom: 10,
          }}>
          UPI WALLET
        </Text>

        <Text
          style={{
            textAlign: 'left',
            fontSize: 17,
            marginLeft: 20,
            marginTop: 5,
            marginBottom: 10,
          }}>
          App: {upiDetails.app}
        </Text>

        <Text
          style={{
            textAlign: 'left',
            fontSize: 17,
            marginLeft: 20,
            marginTop: 5,
            marginBottom: 10,
          }}>
          Balance: Rs {upiDetails.balance}
        </Text>
        {/*  
<View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            <View style={{ flex: 1, height: 70, padding: 22, margin: 8, borderWidth: 1.5, borderColor: '#6B7280', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.dateText}>{exampleDate}</Text>
              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            <View style={{ flex: 1, height: 70, padding: 22, margin: 8, borderWidth: 1.5, borderColor: '#6B7280', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.dateText}>{exampleDate}</Text>
              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
        

  <TouchableOpacity onPress={() => navigation.navigate('Upi')} style={{ backgroundColor: 'white', padding: 3, borderRadius: 5 }}>
            <Text style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>View All</Text>
          </TouchableOpacity>
</View>
       */}
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
