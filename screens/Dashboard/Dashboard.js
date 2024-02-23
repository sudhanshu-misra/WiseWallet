import React,{useState} from 'react';
import {View} from 'react-native';
import CustomHeader from '../../components/Header';
import SharedUI from './DashUI/SharedUI';
import DashModal from './DashUI/DashModal';

export default function DashboardHome({navigation}) {
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
      <DashModal modalState={isModalVisible}  hideModal={()=>SetModalVisible(false)}></DashModal>
      <SharedUI name="Transactions" icon="sync" onClick={transactionHandler}></SharedUI>
    
    </View>
  );
}
