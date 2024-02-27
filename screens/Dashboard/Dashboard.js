import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import TransactionForm from './DashForm/TransactionForm';
import SuccessModal from '../../components/Modal/SuccessModal';

const temp_data = [
  {
    TransactionName: 'asd',
    TransactionDate: '2024-02-21',
    amount: 123,
    icon: 'Restaurant',
  },
  {
    TransactionName: 'asd2',
    TransactionDate: '2024-02-21',
    amount: 123,
    icon: 'Restaurant',
  },
  {
    TransactionName: 'asd3',
    TransactionDate: '2024-02-21',
    amount: 123,
    icon: 'Restaurant',
  },
];

export default function DashboardHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [successVisible, SetSuccessVisible] = useState(false);

  const transactionHandler = () => {
    SetModalVisible(true);
  };
  const budgetHandler = () => {};
  const goalHandler = () => {};
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View>
        <CustomHeader navigation={navigation} />
        <ScrollView>
          <DashboardSharedUI
            name="Transactions"
            icon="sync"
            onClick={transactionHandler}></DashboardSharedUI>
        </ScrollView>

        <Modal modalState={isModalVisible}>
          <TransactionForm
            hideModal={() => SetModalVisible(false)}></TransactionForm>
        </Modal>

        {/* <SuccessModal modalState={isModalVisible} hideModal={()=>SetModalVisible(false)}></SuccessModal> */}
      </View>
    </View>
  );
}
