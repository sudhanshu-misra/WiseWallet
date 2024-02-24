import React,{useState} from 'react';
import {View} from 'react-native';
import CustomHeader from '../../components/Header';
import SharedUI from './WalletUI/SharedUI';
import WalletModal from './WalletUI/WalletModal';


export default function WalletHome({navigation}) {
  const [isModalVisible,SetModalVisible] = useState(false);
  const transactionHandler=()=>{
    SetModalVisible(true);
  }
  const budgetHandler=()=>{
    
  }
  const goalHandler=()=>{
    
  }
   return (
    <View>
      <CustomHeader navigation={navigation} />
      <WalletModal modalState={isModalVisible}  hideModal={()=>SetModalVisible(false)}></WalletModal>
      <SharedUI name="Cards" icon="credit-card" onClick={transactionHandler}></SharedUI>

      <SharedUI name="Income" icon="payments" onClick={goalHandler}></SharedUI>
      

    </View>
  );
}

// Path: screens/Wallet/Wallet.js