
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import SuccessModal from '../../components/Modal/SuccessModal';
import GoalForm from './GoalForm/GoalForm';

const temp_data = [
  {
    GoalName:"Goal"
  }
];



export default function GoalHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [successVisible, SetSuccessVisible] = useState(false);


  const goalHandler = () => {
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
            name="Goals"
            icon="piggy-bank"
            onClick={goalHandler}></DashboardSharedUI>
        </ScrollView>
      
        <Modal modalState={isModalVisible}  hideModal={() => SetModalVisible(false)}>
          <GoalForm
            hideModal={() => SetModalVisible(false)}
            onSubmit={onSubmit}></GoalForm>
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

