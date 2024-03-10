
import React, {useState, useEffect} from 'react';
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
  { key: 'Medication', monthsSpending: 220, startDate: '01/01/2024',endDate: '12/31/2024', Amount: 6000, monthlyBudget: 1000  },
  { key: 'Transport', monthsSpending: 500, startDate: '01/01/2024',endDate: '12/31/2024', Amount: 8000, monthlyBudget: 2000  },
  { key: 'Restaurant', monthsSpending:  450, startDate: '01/01/2024',endDate: '12/31/2024', Amount: 8500, monthlyBudget: 1500},
  { key: 'Grocery', monthsSpending: 230, startDate: '01/01/2024',endDate: '12/31/2024', Amount: 9200, monthlyBudget: 1200},
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
  const series = [90,100, 100, 100, 100, 100, 100, 100];
  // here

  const sliceColor = [
    'rgba(255, 87, 51, 1)',
    'rgba(255, 87, 51, 0.5)',
    'rgba(255, 165, 0, 1)',
    'rgba(255, 165, 0, 0.5)',
    'rgba(51, 255, 87, 1)',
    'rgba(51, 255, 87, 0.5)',
    'rgba(51, 87, 255, 1)',
    'rgba(51, 87, 255, 0.5)'
  ];



  const totalAmount = data.reduce((acc, item) => acc + item.monthlyBudget, 0);
  
  const renderItem = ({ item, index }) => {
    if (!showAllItems && index > 1) {
      return null; // Hide items 3 and 4 if showAllItems is false
    }



    return (
      <View style={[styles.item,  { borderColor: getColor(index), border:"2px solid" }]}>
        <View style={styles.itemLeft}>
        <Text style={styles.itemTitle}>{item.key}</Text>
        <Text style={styles.dateText}>Start Date: {item.startDate}</Text>
        <Text style={styles.dateText}>End Date: {item.endDate}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.monthSpending}>Month's Spending:</Text>
        <Text style={styles.monthSpendingRs}>Rs {item.monthsSpending}</Text>
        <Text style={styles.monthlyBudget}>Monthly Budget:</Text>
        <Text style={styles.monthlyBudgetRs}>Rs {item.monthlyBudget}</Text>
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

  const [graphSeries, setGraphSeries] = useState([90, 90, 100, 100, 100,100, 100, 100]);

  useEffect(() => {
    const series2 = [];
    data.forEach(item => {
      const monthsSpendingPercentage = Math.ceil((item.monthsSpending / item.monthlyBudget) * 100);
      const rsLeftPercentage = Math.floor(((item.monthlyBudget-item.monthsSpending) / item.monthlyBudget) * 100);
      series2.push(monthsSpendingPercentage, rsLeftPercentage);
    });
    console.log(series2);
    setGraphSeries(series2);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader navigation={navigation} />
          
        <View style={styles.chartContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={graphSeries ? graphSeries : series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
            doughnut={true}
          />
          <View style={styles.centerTextContainer}>
            <Text style={styles.centerText}>Budget</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 2,
  },
  itemLeft: {
    flex: 1,
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: -31,
  },
  dateText: {
    fontSize: 13.5,
    marginBottom: 1,
  },
  monthSpending: {
    fontSize: 14,
    marginBottom: -2,
    marginTop: 32,
    marginRight: -3,
  },
  monthlyBudget: {
    fontSize: 14,
    marginRight:-3,
  },
  monthSpendingRs: {
    marginRight: -3,

  },
  monthlyBudgetRs: {
    marginRight: -3,
  }
});