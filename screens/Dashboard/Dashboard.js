import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import TransactionForm from './DashForm/TransactionForm';
import StatusModal from '../../components/Modal/StatusModal';

const temp_data = [
  {
    TransactionName: 'asd',
    TransactionDate: '2024-02-21',
    amount: 123,
    icon: 'Restaurant',
  }
];

export default function DashboardHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [successVisible, SetSuccessVisible] = useState(false);


  const transactionHandler = () => {
    SetModalVisible(true);
  };

  const onSubmit = () => {
    SetModalVisible(false);
    //data extraction here 
    // if(data) received then set success visible  else show error modal with message 
    if(temp_data){
       SetSuccessVisible(true);
    }
    else{
      //error modal
    }

   
  };

  return (
      <View>
        <CustomHeader navigation={navigation} />
        <ScrollView>
          <DashboardSharedUI
            name="Transactions"
            icon="sync"
            onClick={transactionHandler}></DashboardSharedUI>
        </ScrollView>
      
        <Modal modalState={isModalVisible}  hideModal={() => SetModalVisible(false)}>
          <TransactionForm
            hideModal={() => SetModalVisible(false)}
            onSubmit={onSubmit}></TransactionForm>
        </Modal>

        {temp_data && (
          <StatusModal
             modalType="success"
            modalState={successVisible}
            hideModal={() => SetSuccessVisible(false)}
            formData={temp_data[0]}
            ></StatusModal>
        )}
      </View>
  );
}

