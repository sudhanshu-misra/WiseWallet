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
import HeadBack from '../../components/BackHeader.js';

const MyListing = ({navigation}) => {
  const [productData, setProductData] = useState([]);
  const [monitorDelete, setMonitorDelete] = useState(0);
  useEffect(() => {
    setMonitorDelete(0);
    getProductByUser();
  }, [monitorDelete]);

  const getProductByUser = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/product/get-products-by-user`,
        config,
      );

      if (response.data) {
        console.log('user products');
        console.log(response.data.products);
        setProductData(response.data.products);
      } else {
        console.log('products not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async product => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.delete(
        `${host.apiUrl}/api/product/delete-product/${product._id}`,
        config,
      );
      console.log(response.data);
      // Filter out the product that needs to be canceled
      const updatedProductData = productData.filter(
        item => item.id !== product._id,
      );
      // Update the order data state with the filtered array
      setProductData(updatedProductData);
      setMonitorDelete(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="bg-white" style={styles.container}>
      <HeadBack navigation={navigation} title="My listings" />
      {/*
          <------- Custom Header here ------->
       <View className="flex mt-4 flex-row  items-center ml-3 " >
        <Text style={{color: COLORS.primary}} className="font-bold text-2xl ">
          My Listings
        </Text>
      </View> */}
      {!productData && (
        <View className="h-full  flex items-center">
          <View className="flex items-center mt-40 w-full">
            <Text className="text-base">
              Your product list is currently empty .
            </Text>
            <Text className="text-base">Time to start listing !</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="bg-[#497320] flex  mt-3 items-center px-10 py-2  rounded-xl">
                <Text className="text-white">Add product</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {productData && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          backgroundColor="#d9d9d9"
          className="h-full mt-3">
          <View className="pb-[5%] mb-28">
            {productData.map((item, index) => (
              <View key={index} className="bg-white mt-1 ">
                <View className="flex flex-row w-[100%]">
                  <View className="w-[30%] p-2 relative flex justify-center items-center ">
                    <Image
                      source={{uri: item.productImage}}
                      style={[styles.productImage]}
                    />
                  </View>

                  <View className="flex flex-col w-[70%] p-3 justify-between">
                    <View className="">
                      <View className="flex flex-row items-center justify-between ">
                        <Text className="text-lg text-black font-semibold">
                          {item.productName}
                        </Text>
                        <Text className="text-lg text-black font-semibold">
                          ₹ {item.price}
                        </Text>
                      </View>
                    </View>
                    <View className=" flex ">
                      <TouchableOpacity onPress={() => handleDelete(item)}>
                        <View className="bg-red-500  flex  w-[50%]  items-center py-2  rounded-xl">
                          <Text className="text-white">Delete</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* <StatusModal
            modalType={statusVisible.modaltype}
            modalState={statusVisible.visibility}
            hideModal={handleStatus}
            message={statusVisible.message}></StatusModal> */}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto, serif',
  },
  productImage: {
    width: 100,
    height: 80,
    marginBottom: 10,
  },
});

export default MyListing;
