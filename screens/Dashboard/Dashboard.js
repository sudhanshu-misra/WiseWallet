import React, {useState,useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'; // Make sure to import Text
import CustomHeader from '../../components/Header';
import DashboardSharedUI from '../../components/DashBoardUI/DashBoardSharedUI';
import Modal from '../../components/Modal/Modal';
import TransactionForm from './DashForm/TransactionForm';
import StatusModal from '../../components/Modal/StatusModal';
import {LineChart} from 'react-native-gifted-charts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {color} from 'react-native-reanimated';

import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

const temp_data = [
  {
    TransactionName: 'asd',
    TransactionDate: '2024-02-21',
    amount: 123,
    icon: 'Restaurant',
  },
];

const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

const IncomeNames = [
  'Monthly Paycheck',
  'Mileage Compensation',
  'Dining Refund',
  'Pantry Support',
];

const IncomeCategory = ['Salary', 'Transport', 'Restaurant', 'Grocery'];

const ExpenseNames = [
  'Health Supplements',
  'Public Transit Fees',
  'Business Meals',
  'Household Supplies',
];

const ExpenseCategory = ['Medication', 'Transport', 'Restaurant', 'Grocery'];

// Assuming ptData is your chart data for the LineChart component
const IncomeData = [
  {value: 160, date: '1 Jan 2024'},
  {value: 180, date: '2 Jan 2024'},
  {value: 190, date: '3 Jan 2024'},
  {value: 180, date: '4 Jan 2024'},
  {value: 140, date: '5 Jan 2024'},
  // {value: 190, date: '6 Jan 2024'},
  {value: 380, date: '6 Jan 2024'},
  {value: 160, date: '7 Jan 2024'},
  {value: 200, date: '8 Jan 2024'},

  {value: 220, date: '9 Jan 2024'},
  {
    value: 240,
    date: '10 Jan 2024',
    label: '10 Jan',
    labelTextStyle: {color: 'lightgray', width: 44},
  },
  {value: 280, date: '11 Jan 2024'},
  {value: 260, date: '12 Jan 2024'},
  {value: 340, date: '13 Jan 2024'},
  {value: 385, date: '14 Jan 2024'},
  {value: 280, date: '15 Jan 2024'},
  {value: 390, date: '16 Jan 2024'},

  {value: 370, date: '17 Jan 2024'},
  {value: 285, date: '18 Jan 2024'},
  {value: 295, date: '19 Jan 2024'},
  {
    value: 300,
    date: '20 Jan 2024',
    label: '20 Jan',
    labelTextStyle: {color: 'lightgray', width: 44},
  },
  {value: 280, date: '21 Jan 2024'},
  {value: 295, date: '22 Jan 2024'},
  {value: 260, date: '23 Jan 2024'},
  {value: 255, date: '24 Jan 2024'},

  {value: 190, date: '25 Jan 2024'},
  {value: 220, date: '26 Jan 2024'},
  {value: 205, date: '27 Jan 2024'},
  {value: 230, date: '28 Jan 2024'},
  {value: 210, date: '29 Jan 2024'},
  {
    value: 200,
    date: '30 Jan 2024',
    label: '30 Jan',
    labelTextStyle: {color: 'lightgray', width: 44},
  },
  {value: 240, date: '1 Feb 2024'},
  {value: 250, date: '2 Feb 2024'},
  {value: 280, date: '3 Feb 2024'},
  {value: 250, date: '4 Feb 2024'},
  {value: 210, date: '5 Feb 2024'},

  // Your ptData array...
];

const ExpenseData = [
  {value: 220, date: '1 Jan 2024'},
  {value: 410, date: '2 Jan 2024'},
  {value: 190, date: '3 Jan 2024'},
  {value: 180, date: '4 Jan 2024'},
  {value: 320, date: '5 Jan 2024'},
  {value: 220, date: '6 Jan 2024'},
  {value: 110, date: '7 Jan 2024'},
  {value: 335, date: '8 Jan 2024'},
  {value: 215, date: '9 Jan 2024'},
  {
    value: 165,
    date: '10 Jan 2024',
    label: '10 Jan',
    labelTextStyle: {color: 'lightgray', width: 44},
  },
  {value: 160, date: '11 Jan 2024'},
  {value: 155, date: '12 Jan 2024'},
  {value: 145, date: '13 Jan 2024'},
  {value: 140, date: '14 Jan 2024'},
  {value: 135, date: '15 Jan 2024'},
  {value: 140, date: '16 Jan 2024'},
  {value: 145, date: '17 Jan 2024'},
  {value: 120, date: '18 Jan 2024'},
  {value: 155, date: '19 Jan 2024'},
  {
    value: 160,
    date: '20 Jan 2024',
    label: '20 Jan',
    labelTextStyle: {color: 'lightgray', width: 44},
  },
  {value: 165, date: '21 Jan 2024'},
  {value: 150, date: '22 Jan 2024'},
  {value: 175, date: '23 Jan 2024'},
  {value: 180, date: '24 Jan 2024'},
  {value: 185, date: '25 Jan 2024'},
  {value: 440, date: '26 Jan 2024'},
  {value: 105, date: '27 Jan 2024'},
  {value: 200, date: '28 Jan 2024'},
  {value: 205, date: '29 Jan 2024'},
  {
    value: 210,
    date: '30 Jan 2024',
    label: '30 Jan',
    labelTextStyle: {color: 'lightgray', width: 44},
  },
  {value: 215, date: '1 Feb 2024'},
  {value: 220, date: '2 Feb 2024'},
  {value: 225, date: '3 Feb 2024'},
  {value: 230, date: '4 Feb 2024'},
  {value: 235, date: '5 Feb 2024'},
];

export default function DashboardHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });
  // this is the data fetched from the backend
  const [transactionData, settransactionData] = useState({});

  const transactionHandler = () => {
    SetModalVisible(true);
  };

  const onSubmit = async () => {
    SetModalVisible(false);
    // Data extraction here
    //  SetstatusVisible({visibility: true, modaltype: 'loader'});
    const data = await getTransaction();

    settransactionData(data.transactions);

    //  console.log(data.transactions);

    //staus modal should not be here as it will always receives the data and show success status
    if (data) {
      //success modal
      SetstatusVisible({visibility: true, modaltype: 'success'});
    } else {
      //failure modal here
      SetstatusVisible({visibility: true, modaltype: 'failed'});
    }
  };

  useEffect(async () => {
    const data = await getTransaction();
   // console.log(data);
    settransactionData(data.transactions);
  }, []);

  const getTransaction = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/transaction/get-transactions`,
        config,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const [switchGraph, setSwitchGraph] = useState(true);

  return (
    <MenuProvider>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          <CustomHeader navigation={navigation} />

          <View
            style={{
              paddingVertical: 32,
              paddingLeft: 10,
              backgroundColor: '#1C1C1C',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                onPress={() => setSwitchGraph(false)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: 'lightgreen',
                    marginRight: 5,
                  }}></View>
                <Text style={{color: 'lightgreen'}}>Income</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSwitchGraph(true)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: 'lightblue',
                    marginRight: 5,
                  }}></View>
                <Text style={{color: 'lightblue'}}>Expense</Text>
              </TouchableOpacity>
            </View>

            <LineChart
              areaChart
              data={switchGraph ? ExpenseData : IncomeData}
              color={switchGraph ? 'lightblue' : 'lightgreen'}
              numberOfYAxis={2}
              numberOfXAxis={2}
              rotateLabel
              width={279}
              hideDataPoints
              spacing={9}
              thickness={3}
              startFillColor={
                switchGraph ? 'rgba(183, 244, 216,1)' : 'rgba(201, 242, 155,1)'
              }
              endFillColor={
                switchGraph ? 'rgba(183, 244, 216,1)' : 'rgba(201, 242, 155,1)'
              }
              startOpacity={1}
              endOpacity={0}
              initialSpacing={0}
              noOfSections={5}
              maxValue={600}
              yAxisColor="white"
              yAxisThickness={0}
              rulesType="solid"
              rulesColor="gray"
              yAxisTextStyle={{color: 'gray'}}
              yAxisSide="right"
              xAxisColor="lightgray"
              pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: 'lightgray',
                pointerStripWidth: 2,
                pointerColor: 'lightgray',
                radius: 6,
                pointerLabelWidth: 50,
                pointerLabelHeight: 50,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: items => {
                  return (
                    <View
                      style={{
                        height: 90,
                        width: 100,
                        justifyContent: 'center',
                        marginTop: -30,
                        marginLeft: -40,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 14,
                          marginBottom: 6,
                          textAlign: 'center',
                        }}>
                        {items[0].date}
                      </Text>

                      <View
                        style={{
                          paddingHorizontal: 14,
                          paddingVertical: 6,
                          borderRadius: 16,
                          backgroundColor: 'white',
                        }}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                          {'Rs ' + items[0].value}
                        </Text>
                      </View>
                    </View>
                  );
                },
              }}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginTop: 5,
              marginBottom: 10,
            }}>
            INCOME
          </Text>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingHorizontal: 7,
            }}>
            <View
              style={{
                flex: 1,
                height: 70,
                padding: 6,
                margin: 8,
                borderWidth: 1.5,
                borderColor: '#6B7280',
              }}>
              <Text style={styles.itemText}>
                {IncomeNames[0]}({IncomeCategory[0]}): Rs {IncomeData[0].value}{' '}
              </Text>
              <Text style={styles.dateText}>{IncomeData[0].date}</Text>
              <Menu style={styles.threeButton}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>

            <View
              style={{
                flex: 1,
                height: 70,
                padding: 6,
                margin: 8,
                borderWidth: 1.5,
                borderColor: '#6B7280',
              }}>
              <Text style={styles.itemText}>
                {IncomeNames[1]}({IncomeCategory[1]}): Rs {IncomeData[1].value}
              </Text>
              <Text style={styles.dateText}>{IncomeData[1].date}</Text>
              <Menu style={styles.threeButton}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('IncomeHome')}
              style={{backgroundColor: 'white', padding: 4, borderRadius: 5}}>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                marginTop: 5,
                marginBottom: 10,
              }}>
              EXPENSE
            </Text>

            <View
              style={{
                flex: 1,
                height: 70,
                padding: 6,
                margin: 8,
                borderWidth: 1.5,
                borderColor: '#6B7280',
              }}>
              <Text style={styles.itemText}>
                {ExpenseNames[0]}({ExpenseCategory[0]}): Rs{' '}
                {ExpenseData[0].value}{' '}
              </Text>
              <Text style={styles.dateText}>{IncomeData[0].date}</Text>
              <Menu style={styles.threeButton}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>

            <View
              style={{
                flex: 1,
                height: 70,
                padding: 6,
                margin: 8,
                borderWidth: 1.5,
                borderColor: '#6B7280',
              }}>
              <Text style={styles.itemText}>
                {ExpenseNames[1]}({ExpenseCategory[1]}): Rs{' '}
                {ExpenseData[1].value}
              </Text>
              <Text style={styles.dateText}>{IncomeData[1].date}</Text>
              <Menu style={styles.threeButton}>
                <MenuTrigger>
                  <MaterialIcons name="more-vert" size={20} color="black" />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => console.log('Option 1')}>
                    <Text>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => console.log('Option 2')}>
                    <Text>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('ExpenseHome')}
              style={{backgroundColor: 'white', padding: 4, borderRadius: 5}}>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <DashboardSharedUI
            name="Transactions"
            icon="sync"
            onClick={transactionHandler}></DashboardSharedUI>

          <Modal
            modalState={isModalVisible}
            hideModal={() => SetModalVisible(false)}>
            <TransactionForm
              hideModal={() => SetModalVisible(false)}
              onSubmit={onSubmit}></TransactionForm>
          </Modal>

          {transactionData && (
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
              formData={transactionData}></StatusModal>
          )}
        </View>
      </ScrollView>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 7,
    marginLeft: 5,
  },
  itemText: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 1,
  },
  threeButton: {
    marginLeft: 'auto',
    marginRight: -5,
    marginTop: -45,
    marginBottom: -20,
  },
});
