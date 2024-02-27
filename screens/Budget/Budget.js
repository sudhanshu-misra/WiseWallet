
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import SuccessModal from '../../components/Modal/SuccessModal';
import BudgetForm from './BudgetForm/BudgetForm';

const temp_data = [
  {
    BudgetName:"budget"
  }
];

export default function BudgetHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [successVisible, SetSuccessVisible] = useState(false);


  const budgetHandler = () => {
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
            name="Budgets"
            icon="currency-rupee"
            onClick={budgetHandler}></DashboardSharedUI>
        </ScrollView>
      
        <Modal modalState={isModalVisible}  hideModal={() => SetModalVisible(false)}>
          <BudgetForm
            hideModal={() => SetModalVisible(false)}
            onSubmit={onSubmit}></BudgetForm>
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

