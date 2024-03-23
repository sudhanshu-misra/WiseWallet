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
import GoalSharedUI from '../../components/GoalUI/GoalSharedUI';
import Modal from '../../components/Modal/Modal';
import GoalForm from './GoalForm/GoalForm';
import StatusModal from '../../components/Modal/StatusModal';
import PieChart from 'react-native-pie-chart';

import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';

const data = [
  {
    key: 'Buy Item 1',
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 6000,
    rsLeft: 1000,
    totalRsSaving: 5000,
  },
  {
    key: 'Buy Item 2',
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 8000,
    rsLeft: 2000,
    totalRsSaving: 6000,
  },
  {
    key: 'Buy Item 3',
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 8500,
    rsLeft: 1500,
    totalRsSaving: 7000,
  },
  {
    key: 'Buy Item 4',
    startDate: '01/01/2024',
    endDate: '12/31/2024',
    Amount: 9200,
    rsLeft: 1200,
    totalRsSaving: 8000,
  },
];

export default function GoalHome({navigation}) {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });
  const [showAllItems, setShowAllItems] = useState(false);

  // this is the data fetched from the backend
  const [goalData, setgoalData] = useState({});

  //get data from backend

  const getGoal = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/goal/get-goals`,
        config,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( () => {
    const getdata=async()=>{
    const data = await getGoal();
    setgoalData(data.goals);
    }
    getdata();
  }, []);

  const goalHandler = () => {
    SetModalVisible(true);
  };

  const onSubmit = async () => {
    SetModalVisible(false);
    const data = await getGoal();
    setgoalData(data.goals);
    //console.log(data.goals)
    //staus modal should not be here as it will always receives the data and show success status
    if (data) {
      //success modal
      SetstatusVisible({visibility: true, modaltype: 'success'});
    } else {
      //failure modal here
      SetstatusVisible({visibility: true, modaltype: 'failed'});
    }
  };

  const widthAndHeight = 170;
  const series = [90, 100, 100, 100, 100, 100, 100, 100];
  const sliceColor = [
    'rgba(80, 116, 36, 1)',
    'rgba(80, 116, 36, 0.5)',
    'rgba(136, 224, 28, 1)',
    'rgba(136, 224, 28, 0.5)',
    'rgba(51, 255, 87, 1)',
    'rgba(51, 255, 87, 0.5)',
    'rgba(175, 204, 133, 1)',
    'rgba(175, 204, 133, 0.5)',
  ];

  const totalAmount = data.reduce((acc, item) => acc + item.Amount, 0);

  const renderItem = ({item, index}) => {
    if (!showAllItems && index > 1) {
      return null; // Hide items 3 and 4 if showAllItems is false
    }

    const totalAmount = item.rsLeft + item.totalRsSaving;

    return (
      <View
        style={[
          styles.item,
          {borderColor: getColor(index), border: '2px solid'},
        ]}>
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

  const getColor = index => {
    const colors = [
      'rgba(80, 116, 36, 1)',
      'rgba(136, 224, 28, 1)',
      'rgba(51, 255, 87, 1)',
      'rgba(175, 204, 133, 1)',
    ];
    return colors[index % colors.length];
  };

  const toggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  const [graphSeries, setGraphSeries] = useState([
    90, 90, 100, 100, 100, 100, 100, 100,
  ]);

  useEffect(() => {
    const series2 = [];
    data.forEach(item => {
      const totalRsSavingPercentage = Math.ceil(
        (item.totalRsSaving / item.Amount) * 100,
      );
      const rsLeftPercentage = Math.floor((item.rsLeft / item.Amount) * 100);
      series2.push(totalRsSavingPercentage, rsLeftPercentage);
    });
    console.log(series2);
    setGraphSeries(series2);
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} />
      <ScrollView>
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
            <TouchableOpacity
              onPress={toggleItems}
              style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>
                {showAllItems ? 'View Less' : 'View All'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <GoalSharedUI name="Goal" icon="track-changes" onClick={goalHandler} />
      </ScrollView>
      <Modal
        modalState={isModalVisible}
        hideModal={() => SetModalVisible(false)}>
        <GoalForm
          hideModal={() => SetModalVisible(false)}
          onSubmit={onSubmit}
        />
      </Modal>
      {goalData && (
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
              'Failed to add goal ....') ||
            (statusVisible.modaltype === 'success' && 'Goal added successfully')
          }
          formData={goalData}></StatusModal>
      )}
    </View>
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
