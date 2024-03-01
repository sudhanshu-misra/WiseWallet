
import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/Header';
import BudgetSharedUI from '../../components/BudgetUI/BudgetSharedUI';
import Modal from '../../components/Modal/Modal';
import SuccessModal from '../../components/Modal/SuccessModal';
import BudgetForm from './BudgetForm/BudgetForm';
import PieChart from 'react-native-pie-chart';

const temp_data = [
  {
    BudgetName:"budget"
  }
];

const data = [
  { key: 'Medication', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 6000, rsLeft: 1000, totalRsSaving: 5000 },
  { key: 'Transport', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 8000, rsLeft: 2000, totalRsSaving: 6000 },
  { key: 'Restaurant', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 8500, rsLeft: 1500, totalRsSaving: 7000 },
  { key: 'Grocery', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 9200, rsLeft: 1200, totalRsSaving: 8000 },
];

export default function BudgetHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [successVisible, SetSuccessVisible] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);

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

  const widthAndHeight = 170;
  const series = [100, 100, 100, 100];
  const sliceColor = [
    'rgba(255, 87, 51, 0.5)',
    'rgba(255, 165, 0, 0.5)',
    'rgba(51, 255, 87, 0.5)',
    'rgba(51, 87, 255, 0.5)',
  ];

  const totalAmount = data.reduce((acc, item) => acc + item.Amount, 0);

  
  const renderItem = ({ item, index }) => {
    if (!showAllItems && index > 1) {
      return null; // Hide items 3 and 4 if showAllItems is false
    }

    const totalAmount = item.rsLeft + item.totalRsSaving;

    return (
      <View style={[styles.item, { backgroundColor: getColor(index) }]}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemTitle}>{item.key}</Text>
          <Text>Start Date: {item.startDate}</Text>
          <Text>End Date: {item.endDate}</Text>
        </View>
        <View style={styles.itemRight}>
          <Text style={styles.amountText}> Amount: {totalAmount}</Text>
          <Text>Rupees Left: {item.rsLeft}</Text>
          <Text>Total Rupees Saving: {item.totalRsSaving}</Text>
        </View>
      </View>
    );
  };

  const getColor = (index) => {
    const colors = [
      'rgba(255, 87, 51, 1)',
      'rgba(255, 165, 0, 1)',
      'rgba(51, 255, 87, 1)',
      'rgba(51, 122, 222, 1)',
    ];
    return colors[index % colors.length];
  };

  const toggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  return (
      <View style={styles.container}>
        <CustomHeader navigation={navigation} />
          <ScrollView>
        <View style={styles.chartContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
            doughnut={true}
          />
          <View style={styles.centerTextContainer}>
            <Text style={styles.centerText}>Goal</Text>
            <Text style={styles.totalAmountText}>Rs {totalAmount}</Text>
          </View>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            style={styles.flatList}
          />
          {data.length > 2 && (
            <TouchableOpacity onPress={toggleItems} style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>{showAllItems ? 'View Less' : 'View All'}</Text>
            </TouchableOpacity>
          )}
        </View>
        <BudgetSharedUI name="Budget" icon="track-changes" onClick={budgetHandler} />
      </ScrollView>
      <Modal modalState={isModalVisible} hideModal={() => SetModalVisible(false)}>
        <BudgetForm hideModal={() => SetModalVisible(false)} onSubmit={onSubmit} />
      </Modal>
      {temp_data && (
        <SuccessModal
          modalState={successVisible}
          hideModal={() => SetSuccessVisible(false)}
          formData={temp_data[0]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  centerTextContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 62,
  },
  totalAmountText: {
    fontSize: 14,
    marginBottom: 10,
  },
  flatListContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  flatList: {
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  itemLeft: {
    flex: 1,
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  viewAllButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  viewAllText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});


