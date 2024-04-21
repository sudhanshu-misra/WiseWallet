import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import GlobalContext from '../../helpers/GlobalContext';
import {useContext, useState, useEffect} from 'react';
import {current} from '@reduxjs/toolkit';
import {COLORS} from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';

const OrderScreen = ({navigation}) => {
  const [orderData, setOrderData] = useState([]);
  const [orderScreen, setOrderScreen] = useState('pending');

  const {fetchOrders, setFetchOrders} = useContext(GlobalContext);

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
      console.log('orders', response.data.orders);

      if (response.data.orders) {
        console.log('products ordered');

        const orders = response.data.orders;

        orders.map(order => {
          const date = new Date(order.orderDate);
          const day = date.getDate();
          const month = monthNames[date.getMonth() - 1];
          const year = date.getFullYear();

          const d = day + ' ' + month;

          order.orderDateString = d;
        });
        console.log('orderDetails', orders);

        setOrderData(orders);
      } else {
        console.log('products not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductPress = product => {
    // Navigate to product details screen or perform any action
    console.log('Product pressed:', product);
  };

  // const handleBuyNow = (product) => {
  //   navigation.navigate('Buy', { product });
  // }

  const handleCancel = async order => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(order);
    try {
      const response = await axios.delete(
        `${host.apiUrl}/api/order/delete-order/${order._id}`,
        config,
      );
      console.log(response.data);
      // Filter out the product that needs to be canceled
      const updatedOrderData = orderData.filter(item => item.id !== order.id);
      // Update the order data state with the filtered array
      setOrderData(updatedOrderData);
      setFetchOrders(4);
    } catch (error) {
      console.log(error);
    }
  };

  // const Notification = ({message}) => (
  //   <View style={styles.notificationContainer}>
  //     <Text style={styles.notificationText}>{message}</Text>
  //   </View>
  // );

  // yeeeeeeeeeeeeeeeeeeeeee rahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  const handleComplete = () => {
    // anay
  };

  //console.log(orderData);

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
        <TouchableOpacity onPress={() => setOrderScreen('completed')}>
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

                          {/* <Text className="text-sm text-black">
                      {item.productDescription}
                    </Text> */}
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
            {orderData.map(
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

                          {/* <Text className="text-sm text-black">
                      {item.productDescription}
                    </Text> */}
                        </View>
                        <View className=" flex gap-2">
                          {/* <TouchableOpacity onPress={() => handleBuyNow(item)}>
                    <View className="bg-[#497320] w-full flex items-center py-2 rounded-xl">
                      <Text className="text-white">Buy Now</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRemove(item)}>
                    <View className="bg-[#497320] w-full flex items-center py-2 rounded-xl">
                      <Text className="text-white">Remove</Text>
                    </View>
                  </TouchableOpacity> */}
                        </View>
                      </View>
                    </View>
                  </View>
                ),
            )}
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

// <ScrollView backgroundColor="white">
// <View>
//   <CustomHeader navigation={navigation} />
//   <Text
//     style={{
//       fontSize: 22,
//       fontWeight: 'bold',
//       margin: 10,
//       color: COLORS.primary,
//     }}>
//     Your Orders
//   </Text>
//   {orderData.map((item, index) => (
//     <View key={index}>
//       <View style={styles.productContainer}>
//         <View style={styles.productItem}>
//           <TouchableOpacity onPress={() => handleProductPress(item)}>
//             <View style={styles.imageContainer}>
//               {/* Apply opacity style for the image */}
//               <Image
//                 source={{uri: item.product.productImage}}
//                 style={[styles.productImage]}
//               />
//               {/* {item.productName === 'Drafter scale' && (
//         <View style={styles.notAvailableContainer}>
//           <Text style={styles.notAvailableText}>Not Available</Text>
//         </View>
//       )} */}
//             </View>
//           </TouchableOpacity>

//           <Text style={styles.productName}>
//             {item.product.productName}
//           </Text>
//           <Text style={styles.productPrice}>Rs {item.price}</Text>
//           {/* <Text style={styles.sellerInfo}>Seller Name: {item.seller.name}</Text> */}
//           {/* <Text>({item})</Text> */}

//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => handleCancel(item)}>
//             <Text style={styles.addToCartButtonText}>Cancel Order</Text>
//           </TouchableOpacity>

//           <Text size="large">
//             {' '}
//             Order date and time: {item.orderDate.slice(0, 10)}{' '}
//           </Text>
//           <Text> {item.orderDate.slice(11, 16)} </Text>
//         </View>
//       </View>
//     </View>
//   ))}
// </View>
// </ScrollView>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   categories: {
//     marginBottom: 10,
//   },
//   categoryItem: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,
//     backgroundColor: '#f0f0f0',
//   },
//   selectedCategory: {
//     backgroundColor: '#007bff',
//   },
//   categoryText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   productList: {
//     flexGrow: 1,
//   },
//   productContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   productItem: {
//     flex: 1,
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   imageContainer: {
//     alignItems: 'center', // Centering the image within its container
//   },
//   productImage: {
//     width: 150,
//     height: 150,
//     marginBottom: 10,
//   },
//   productName: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 16,
//     color: '#888',
//   },
//   sellerInfo: {
//     fontSize: 14,
//     color: '#666',
//   },
//   addToCartButton: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   addToCartButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   notificationContainer: {
//     position: 'absolute',
//     bottom: 1,
//     left: '50%',
//     bottom: '50%',
//     transform: [{translateX: 20}, {translateY: 20}],
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     padding: 10,
//     borderRadius: 5,
//   },
//   notificationText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   fadedImage: {
//     opacity: 0.5, // Set opacity to make the image look faded
//   },
//   notAvailableContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red background
//     paddingVertical: 5,
//   },
//   notAvailableText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   notifyButtonContainer: {
//     position: 'absolute',
//     top: -8, // Adjust the position as needed
//     right: 2, // Adjust the position as needed
//   },
//   notifyButton: {
//     backgroundColor: 'green',
//     padding: 3,
//     borderRadius: 5,
//   },
//   notifyButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });
