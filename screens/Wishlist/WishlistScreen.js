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
import {COLORS} from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host';
import axios from 'axios';
import StatusModal from '../../components/Modal/StatusModal';
import {set} from 'react-native-reanimated';

const WishlistScreen = ({navigation}) => {
  // context data
  const {fetchWishlist, setFetchWishlist} = useContext(GlobalContext);
  const {fetchOrders, setFetchOrders, fetchProducts, setFetchProducts} =
    useContext(GlobalContext);
 const [wishlistData,setWishlistData] =useState([]);


  // Status Modal Data
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
    message: '',
  });

  const handleStatus = () => {
    SetstatusVisible(prev => {
      return {visibility: false, modaltype: prev.modaltype, message: ''};
    });
  };

  const handleBuyNow = async item => {

  //  console.log(product);
    const token = await AsyncStorage.getItem('token');
   // console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        `${host.apiUrl}/api/order/create-order`,
        {
          product: item.product,
          price: item.product.price,
          orderStatus: 'pending',
        },
        config,
      );
      // console.log(response.data);
      // console.log('whis', wishlistData);
      // console.log('produt', product);
      // setWishlistData(wishlistData.filter(item => item._id !== product._id));
      // console.log(fetchOrders, 'space', fetchProducts);
     

      //removing from wishlist
      if(response.data){
        handleRemove(item._id);

        setFetchOrders(3);
        setFetchProducts(3);
        SetstatusVisible({
          visibility: true,
          modaltype: 'success',
          message: 'Order placed successfully',
        });
  
      }
          


    } catch (error) {
      console.log(error);
      SetstatusVisible({
        visibility: true,
        modaltype: 'failed',
        message: 'Failed to place order',
      });
    }
  };

  const handleRemove = async wishlistId => {
    // // Filter out the product that needs to be removed
    // const updatedCartItems = wishlistData.filter(
    //   item => item._id !== product._id,
    // );
    // // Update the cart items state with the filtered array
    // setWishlistData(updatedCartItems);

    try{
      const token = await AsyncStorage.getItem("token");
         const config={
          headers: {
            Authorization: `Bearer ${token}`,
          },
         }

         const response = await axios.delete(`${host.apiUrl}/api/wishlist/delete-from-wishlist/${wishlistId}` ,
         config
        )
        if(response.data){
          setFetchWishlist(3);
        }
    }
    catch(err){
       console.log(err);
    }

  };


  const getWishlist =async ()=>{
    try{
      const token = await AsyncStorage.getItem("token");
         const config={
          headers: {
            Authorization: `Bearer ${token}`,
          },
         }

         const response = await axios.get(`${host.apiUrl}/api/wishlist/get-user-wishlist` ,
         config
        )
        const wishlistInfo = response.data.response;
          
         setWishlistData(wishlistInfo)
          // console.log(wishlistInfo); 
    }
    catch(err){
       console.log(err);
    }
  }

  
  useEffect(() => {
    try {
      console.log(fetchWishlist)
      getWishlist();
    } finally {
      setFetchWishlist(0);
    }
  }, [fetchWishlist]);

  // const Notification = ({message}) => (
  //   <View style={styles.notificationContainer}>
  //     <Text style={styles.notificationText}>{message}</Text>
  //   </View>
  // );


  return (
    <View className="bg-white" style={styles.container}>
      <CustomHeader navigation={navigation} />

      <Text
        className="m-auto mt-2 font-bold text-2xl"
        style={{
          color: COLORS.primary,
        }}>
        Your Wishlist
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="#d9d9d9"
        className="h-full mt-5"
        >
        <View className="pb-[5%]">
          {wishlistData.map((item, index) => (
            <View key={index} className="bg-white mt-1 ">
              <View className="flex flex-row w-[100%]">
                <View className="w-[40%] p-2 relative">
                  <Image
                    source={{uri: item.product.productImage}}
                    style={[styles.productImage]}
                  />
                </View>

                <View className="flex flex-col w-[60%] p-3 justify-between">
                  <View className="">
                    <View className="flex flex-row items-center justify-between">
                      <Text className="text-base text-black font-semibold">
                        {item.product.productName}
                      </Text>
                    </View>
                    <Text className="text-base text-black font-semibold">
                      ₹ {item.product.price}
                    </Text>
                    {/* <Text className="text-sm text-black">
                      {item.productDescription}
                    </Text> */}
                  </View>
                  <View className=" flex gap-2">
                  <TouchableOpacity onPress={() => handleBuyNow(item)}>
                    <View className="bg-[#497320] w-full flex items-center py-2 rounded-xl">
                      <Text className="text-white">Buy Now</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRemove(item._id)}>
                    <View className="bg-[#497320] w-full flex items-center py-2 rounded-xl">
                      <Text className="text-white">Remove</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                </View>

                {/* <View className="m-2 flex flex-row flex-wrap">
                  <View className="border-2 p-1 border-[#d9d9d9]">
                    <Text>{item.category}</Text>
                  </View>
                  {item.courseName && (
                    <View className="border-2 p-1 border-[#d9d9d9] ml-2">
                      <Text>{item.courseName}</Text>
                    </View>
                  )}
                  {item.semester && (
                    <View className="m-1 border-2 p-1 border-[#d9d9d9] ml-2">
                      <Text>Semester {item.semester}</Text>
                    </View>
                  )}
                </View> */}
              </View> 
            </View>
          ))}
        </View>

        <StatusModal
          modalType={statusVisible.modaltype}
          modalState={statusVisible.visibility}
          hideModal={handleStatus}
          message={statusVisible.message}></StatusModal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto, serif',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default WishlistScreen;
