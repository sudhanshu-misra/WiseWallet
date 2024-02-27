
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import SuccessModal from '../../components/Modal/SuccessModal';
import WalletForm from './WalletForm/WalletForm';

const temp_data = [
  {
   WalletName:"wallet"
  }
];

export default function WalletHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [successVisible, SetSuccessVisible] = useState(false);


  const walletHandler = () => {
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
            name="Payment Methods"
            icon="credit-card"
            onClick={walletHandler}></DashboardSharedUI>
        </ScrollView>
      
        <Modal modalState={isModalVisible}  hideModal={() => SetModalVisible(false)}>
          <WalletForm
            hideModal={() => SetModalVisible(false)}
            onSubmit={onSubmit}></WalletForm>
        </Modal>

        {temp_data && (
          <SuccessModal
            modalState={successVisible}
            hideModal={() => SetSuccessVisible(false)}
            formData={temp_data[0]}
            ></SuccessModal>
        )}
      </View>

  );
}

