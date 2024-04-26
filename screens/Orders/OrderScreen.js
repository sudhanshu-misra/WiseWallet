import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import GlobalContext from '../../helpers/GlobalContext';
import {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';

const OrderScreen = ({navigation}) => {
  const [orderData, setOrderData] = useState([]);
  const [orderScreen, setOrderScreen] = useState('pending');
  const [groupedOrders, setGroupedOrders] = useState();

  const {fetchOrders, setFetchOrders , setFetchProducts} = useContext(GlobalContext);

  useEffect(() => {
    try {
      getOrders();
    } finally {
      setFetchOrders(0);
    }
  }, [fetchOrders]);

  const getOrders = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/order/get-orders-by-buyer`,
        config,
      );
      // console.log('orders', response.data.orders);

      if (response.data.orders) {
        console.log('products ordered');

        const orders = response.data.orders;

        orders.map(order => {
          const date = new Date(order.orderDate);
          const day = date.getDate();
          const month = monthNames[date.getMonth()];
          const year = date.getFullYear();

          const d = day + ' ' + month;

          order.orderDateString = d;
        });
        // console.log('orderDetails', orders);

        setOrderData(orders);
      } else {
        console.log('products not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const groupOrdersByMonthAndYear = () => {
    const groupedOrders = {};
    orderData.forEach(order => {
      if (order.orderStatus === 'completed') {
        const date = new Date(order.completeDate);
        const monthYear = `${date.toLocaleString('en-us', {
          month: 'long',
        })}, ${date.getFullYear()}`;
        if (!groupedOrders[monthYear]) {
          groupedOrders[monthYear] = [];
        }
        groupedOrders[monthYear].push(order);
      }
    });
    setGroupedOrders(groupedOrders);
  };

  const handleCancel = async order => {
    const token = await AsyncStorage.getItem('token');
    // console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log(order);
    try {
      const response = await axios.delete(
        `${host.apiUrl}/api/order/delete-order/${order._id}`,
        config,
      );
      // console.log(response.data);
      // Filter out the product that needs to be canceled
      const updatedOrderData = orderData.filter(item => item.id !== order.id);
      // Update the order data state with the filtered array
      setOrderData(updatedOrderData);
      setFetchOrders(4);
      setFetchProducts(4);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async order => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.put(
        `${host.apiUrl}/api/order/complete-order/${order._id}`,
        {},
        config,
      );
      console.log(response.data);
      setFetchOrders(4);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  return (
    <View className="bg-white" style={styles.container}>
      <CustomHeader navigation={navigation} />
      <View className="flex mt-3 flex-row items-center justify-evenly">
        <TouchableOpacity onPress={() => setOrderScreen('pending')}>
          <Text
            className={`font-bold text-lg ${
              orderScreen === 'pending' ? ' text-green-700' : ''
            }`}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            groupOrdersByMonthAndYear();
            setOrderScreen('completed');
          }}>
          <Text
            className={`font-bold text-lg ${
              orderScreen === 'completed' ? ' text-green-700' : ''
            }`}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="#d9d9d9"
        className="h-full mt-3">
        {orderScreen === 'pending' && (
          <View className="pb-[5%]">
            {orderData.map(
              (item, index) =>
                item.orderStatus === 'pending' && (
                  <View key={index} className="bg-white mt-1 ">
                    <View className="flex flex-row w-[100%]">
                      <View className="w-[25%] p-2 relative flex justify-center items-center">
                        <Image
                          source={{uri: item.product.productImage}}
                          style={[styles.productImage]}
                        />
                      </View>

                      <View className="flex flex-col w-[75%] p-3 justify-between">
                        <View className="mb-2">
                          <View className="flex flex-row items-center justify-between ">
                            <Text className="text-base text-black font-semibold">
                              Ordered on {item.orderDateString}
                            </Text>
                            <Text className="text-base text-black font-semibold">
                              ₹ {item.price}
                            </Text>
                          </View>
                          <View className="flex flex-row items-center  mt-1">
                            <Text className="text-sm">
                              {item.product.productName}
                            </Text>
                          </View>
                        </View>
                        <View className=" flex flex-row gap-5">
                          <TouchableOpacity
                            onPress={() => handleComplete(item)}>
                            <View className="bg-[#497320] w-max flex  items-center p-2 rounded-xl">
                              <Text className="text-white">Complete</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => handleCancel(item)}>
                            <View className="bg-red-500  flex  w-max  items-center p-2 rounded-xl">
                              <Text className="text-white">Cancel Order</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                ),
            )}
          </View>
        )}
        {orderScreen === 'completed' && (
          <View className="pb-[5%]">
            {Object.keys(groupedOrders).map((monthYear, index) => (
              <View key={index}>
                <View className="bg-white mt-1 p-2">
                  <Text className="text-lg font-medium text-black">
                    {monthYear}
                  </Text>
                </View>
                {groupedOrders[monthYear].map(
                  (item, index) =>
                    item.orderStatus === 'completed' && (
                      <View key={index} className="bg-white mt-1 ">
                        <View className="flex flex-row w-[100%]">
                          <View className="w-[25%] p-2 relative flex justify-center items-center">
                            <Image
                              source={{uri: item.product.productImage}}
                              style={[styles.productImage]}
                            />
                          </View>

                          <View className="flex flex-col w-[75%] p-3 justify-between">
                            <View className="">
                              <View className="flex flex-row items-center justify-between ">
                                <Text className="text-base text-black font-semibold">
                                  Completed on {item.orderDateString}
                                </Text>
                                <Text className="text-base text-black font-semibold">
                                  ₹ {item.price}
                                </Text>
                              </View>
                              <View className="flex flex-row items-center  mt-2">
                                <Text className="text-sm">
                                  {item.product.productName}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    ),
                )}
              </View>
            ))}
          </View>
        )}

        {/* <StatusModal
          modalType={statusVisible.modaltype}
          modalState={statusVisible.visibility}
          hideModal={handleStatus}
          message={statusVisible.message}></StatusModal> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto, serif',
  },
  productImage: {
    width: 90,
    height: 80,
    marginBottom: 10,
  },
});

export default OrderScreen;

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
