import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header';
import BudgetSharedUI from '../../components/BudgetUI/BudgetSharedUI';
import Modal from '../../components/Modal/Modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/theme.js';
import StatusModal from '../../components/Modal/StatusModal';
import BudgetForm from './BudgetForm/BudgetForm';
import PieChart from 'react-native-pie-chart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';

const data = [
  {
    key: 'Medication',
    monthsSpending: 220,
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 6000,
    monthlyBudget: 1000,
  },
  {
    key: 'Transport',
    monthsSpending: 500,
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 8000,
    monthlyBudget: 2000,
  },
  {
    key: 'Restaurant',
    monthsSpending: 450,
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 8500,
    monthlyBudget: 1500,
  },
  {
    key: 'Grocery',
    monthsSpending: 230,
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 9200,
    monthlyBudget: 1200,
  },
];

export default function BudgetHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });
  const [showAllItems, setShowAllItems] = useState(false);

  // this is the data fetched from the backend
  const [budgetData, setBudgetData] = useState();

  const budgetHandler = () => {
    SetModalVisible(true);
  };

  const onSubmit = async () => {
    SetModalVisible(false);
    const data = await getBudget();
    setbudgetData(data.budgets);
  };

  const getBudgetData = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/budget/get-budgets`,
        config,
      );
      console.log(response.data);
      setBudgetData(response.data.budgets);
      // getGraphData();
    } catch (error) {
      console.log(error);
    }
  };

  const widthAndHeight = 170;
  const series = [1, 99, 1, 99, 1, 99, 1, 99, 1, 99];
  // here

  const sliceColor = [
    'rgba(80, 116, 36, 1)',
    'rgba(80, 116, 36, 0.5)',
    'rgba(136, 224, 28, 1)',
    'rgba(136, 224, 28, 0.5)',
    'rgba(51, 255, 87, 1)',
    'rgba(51, 255, 87, 0.5)',
    'rgba(175, 204, 133, 1)',
    'rgba(175, 204, 133, 0.5)',
    'rgba(175, 204, 133, 1)',
    'rgba(175, 204, 133, 0.5)',
  ];

  const totalAmount = data.reduce((acc, item) => acc + item.monthlyBudget, 0);

  const renderItem = ({item, index}) => {
    if (!showAllItems && index > 1) {
      return null; // Hide items 3 and 4 if showAllItems is false
    }

    return (
      <View
        style={[
          styles.item,
          {borderColor: getColor(index), border: '2px solid'},
        ]}>
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

  const getColor = index => {
    const colors = [
      'rgba(80, 116, 36, 1)',
      'rgba(136, 224, 28, 1)',
      'rgba(136, 224, 28, 1)',
      'rgba(175, 204, 133, 1)',
    ];
    return colors[index % colors.length];
  };

  const toggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  const [graphSeries, setGraphSeries] = useState([
    1, 99, 1, 99, 1, 99, 1, 99, 1, 99,
  ]);

  getGraphData = async () => {
    const series2 = [];
    console.log(budgetData);
    budgetData?.forEach(item => {
      const monthsSpendingPercentage = Math.ceil(
        (item.moneySpent / item.amount) * 100,
      );
      const rsLeftPercentage = Math.floor(
        ((item.amount - item.moneySpent) / item.amount) * 100,
      );
      series2.push(monthsSpendingPercentage, rsLeftPercentage);
    });
    console.log(series2);
    setGraphSeries(series2);
  };

  useEffect(() => {
    getBudgetData();
  }, []);

  // useEffect(() => {
  // }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader navigation={navigation} />
        {!budgetData ? (
          <BudgetSharedUI
            name="Budget"
            icon="track-changes"
            onClick={budgetHandler}
          />
        ) : (
          <View>
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
            <View className="mx-7 flex flex-row justify-between">
              <Text className="text-xl text-black">Budget</Text>
              <Text
                className="text-lg"
                style={{color: `${COLORS.neutral}`}}
                onPress={() => budgetHandler()}>
                <Icon name="plus" size={16}>
                  {' '}
                </Icon>{' '}
                Add new{' '}
              </Text>
            </View>
            <View style={styles.flatListContainer}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                style={styles.flatList}
              />
              {data.length > 2 && (
                <TouchableOpacity
                  onPress={toggleItems}
                  style={styles.viewAllButton}>
                  <Text style={styles.viewAllText}>
                    {showAllItems ? 'View Less' : 'View All'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        {/* <BudgetSharedUI
          name="Budget"
          icon="track-changes"
          onClick={budgetHandler}
        /> */}

        <Modal
          modalState={isModalVisible}
          hideModal={() => SetModalVisible(false)}>
          <BudgetForm
            hideModal={() => SetModalVisible(false)}
            onSubmit={onSubmit}
          />
        </Modal>
        {budgetData && (
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
                'Failed to add budget ....') ||
              (statusVisible.modaltype === 'success' &&
                'Budget added successfully')
            }
            formData={budgetData}></StatusModal>
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
    marginRight: -3,
  },
  monthSpendingRs: {
    marginRight: -3,
  },
  monthlyBudgetRs: {
    marginRight: -3,
  },
});
