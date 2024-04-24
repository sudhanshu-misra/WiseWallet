import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Pressable,
} from 'react-native';
import CustomHeader from '../../components/Header';
import GlobalContext from '../../helpers/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusModal from '../../components/Modal/StatusModal';
import SortModal from './filter/SortModal.js';
import Modal from '../../components/Modal/Modal.js';

const MarketHome = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  //const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  // const [sortBy, setSortBy] = useState('');
  //  sortBy values - asc(low to high) ,  desc(high to low) , new(newestfirst)

  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
    message: '',
  });

  const [wishlistData,setWishlistData] =useState([]);

  const categories = [
    'Textbooks',
    'Electronics',
    'Furniture',
    'Clothing',
    'Appliances',
    'Sports Equipment',
    'Stationery',
    'Musical Instruments',
    'Kitchenware',
    'Books',
    'Art Supplies',
    'Room Decor',
    'Fitness & Wellness',
    'Tickets & Events',
    'Miscellaneous',
  ];

  const {
    fetchWishlist,
    setFetchWishlist,
    fetchProducts,
    setFetchProducts,
    setFetchOrders,
    fetchOrders,
    sortType,
    setSortType,
    filterType,
  } = useContext(GlobalContext);

  useEffect(() => {
    try {
      getProducts();
      getWishlist();
    } finally {
      setFetchProducts(0);
      setFetchWishlist(0);
    }
  }, [fetchProducts, sortType, filterType,fetchWishlist]);

  useEffect(() => {
    try {
      // console.log(fetchWishlist)
      getWishlist();
    } finally {
      setFetchWishlist(0);
    }
  }, [fetchWishlist]);

  const getProducts = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(
        `${host.apiUrl}/api/product/get-products?sortBy=${sortType}&category=${filterType.category}&priceRange=${filterType.priceRange}&programName=${filterType.programName}&courseName=${filterType.courseName}&semester=${filterType.semester}&exclude=${filterType.exclude}`,
      );
      const response = await axios.get(
        `${host.apiUrl}/api/product/get-products?sortBy=${sortType}&category=${filterType.category}&priceRange=${filterType.priceRange}&programName=${filterType.programName}&courseName=${filterType.courseName}&semester=${filterType.semester}&exclude=${filterType.exclude}`,
        config,
      );
      // console.log(response.data.products);

      if (response.data) {
        console.log('products received');
        setProducts(response.data.products);
        //console.log('products', products);
      } else {
        console.log('products not found');
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Buy
  const buyproduct = async product => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log("buyproduct" ,product);

      const response = await axios.post(
        `${host.apiUrl}/api/order/create-order`,
        {
          product: product,
          price: product.price,
          orderStatus: 'pending',
        },
        config,
      );
      // console.log("resposen buy",response.data);
      if (response.data) {
        setFetchOrders(1);
        setFetchProducts(1);
        SetstatusVisible({
          visibility: true,
          modaltype: 'success',
          message: 'Order successfull',
        });
      }
    } catch (err) {
      console.log(err.response.data.message);
      SetstatusVisible({
        visibility: true,
        modaltype: 'failed',
        message: 'Order failed ... please try again',
      });
    }
  };

  //handleStatus
  const handleStatus = () => {
    SetstatusVisible(prev => {
      return {visibility: false, modaltype: prev.modaltype, message: ''};
    });
  };

  //wishlist
  const handleAddToWishlist = async product => {
    // const itemExists = wishlistData.some(item => item.id === product._id);

    // if (!itemExists) {
      // console.log('Product added to wishlist:', product);
      // setWishlistData([...wishlistData, product]);


      const token = await  AsyncStorage.getItem('token')
      try{
         const config={
          headers: {
            Authorization: `Bearer ${token}`,
          },
         }

          const productId = product._id

         const response = await axios.post(`${host.apiUrl}/api/wishlist/toggle-wishlist`,{
             productId
         } ,
         config
        )
        // console.log(response.data);
        
        setFetchWishlist(1);
         
        if(response.data){
        // SetstatusVisible({
        //   visibility: true,
        //   modaltype: 'success',
        //   message: 'product added to wishlist',
        // });
      }
      

        // setNotificationMessage(`${product.productName} added to your wishlist.`);
        // setShowNotification(true);
  
        // setTimeout(() => {
        //   setShowNotification(false);
        // }, 2000);

      }
      catch(err){
        console.log(err.response.data.message);
        SetstatusVisible({
          visibility: true,
          modaltype: 'failed',
          message: 'Unable to add to wishlist... please try again',
        });
      }
      
  

    // } else {
    //   SetstatusVisible({
    //     visibility: true,
    //     modaltype: 'failed',
    //     message: 'failed to add product to  wishlist',
    //   });
     // }
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


  const handleBuyNow = async product => {
    // const itemExists = wishlistData.some(item => item.id === product.id);
    // if (!itemExists) console.log('Product has been placed for order.', product);
    // {
      await buyproduct(product);
      setNotificationMessage(`${product.productName} added to your wishlist.`);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    // }
  };

  const handleNotificationWhenAvailable = async product => {
    const token = await AsyncStorage.getItem('token');
    console.log(product);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        `${host.apiUrl}/api/notification/create-notification`,
        {
          message: 'Product is available now, you can buy it now.',
          productName: product.productName,
        },
        config,
      );
      console.log(response.data);
      SetstatusVisible({
        visibility: true,
        modaltype: 'success',
        message: 'Notification subscribed successfully',
      });
    } catch (error) {
      console.log(error);
      SetstatusVisible({
        visibility: true,
        modaltype: 'failed',
        message: 'Failed to subscribe notification',
      });
    }
  };

  // const Notification = ({message}) => (
  //   <View style={styles.notificationContainer}>
  //     <Text style={styles.notificationText}>{message}</Text>
  //   </View>
  // );

  //sort By modal handler
  const sortByModalHandler = () => {
    setModalVisible(true);
  };
  const handleSortField = sort => {
    // setSortType(sort);
    // setFetchProducts(8);
    console.log(sortType);
    // console.log(sort)
  };
  const filterHandler = () => {
    navigation.navigate('MarketFilter');
  };

  return (
    <View className="bg-white" style={styles.container}>
      <CustomHeader navigation={navigation} />
      <View className="m-4 flex flex-row">
        <TouchableOpacity onPress={sortByModalHandler}>
          <View className="border-2 border-[#d9d9d9] rounded-md flex flex-row justify-between items-center p-2">
            <Icon name="sort" size={20} color="black" />
            <Text className="pl-2 text-black">Sort By</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={filterHandler}>
          <View className="border-2 border-[#d9d9d9] rounded-md flex flex-row justify-between items-center p-2 ml-2">
            <Icon name="filter" size={20} color="black" />
            <Text className="pl-2 text-black">Filter</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="#d9d9d9">
        <View className="pb-[28%]">
          {products.map((product, index) => (
            <View key={index} className="bg-white mt-1 ">
              <View className="flex flex-row w-[100%] ">
                <View className="w-[40%] p-2 relative">
                  <Image
                    source={{uri: product.productImage}}
                    style={styles.productImage}
                  />
                  {product.isSold ? (
                    <View className="absolute bg-[#CA4343] bottom-0 p-2 m-2 w-[150px]">
                      <Text className="text-white text-center">
                        Out of Stock
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View className="flex flex-col w-[60%] p-3 justify-between">
                  <View className="">
                    <View className="flex flex-row items-center justify-between">
                      <Text className="text-base text-black font-semibold">
                        {product.productName}
                      </Text>
                      {!product.isSold && (
                        <TouchableOpacity
                          onPress={() => handleAddToWishlist(product)}>
                          {wishlistData.some(  
                            item => item.product._id === product._id,
                          ) ? (
                            <Icon name="heart" size={20} color="red" />
                          ) : (
                            <Icon name="heart-o" size={20} color="black" />  
                          )}
                        </TouchableOpacity>
                      )}
                    </View>
                    <Text className="text-base text-black font-semibold">
                      ₹ {product.price}
                    </Text>
                    <Text className="text-sm text-black">
                      {product.productDescription}
                    </Text>
                  </View>
                  {product.isSold ? (
                    <TouchableOpacity
                      onPress={() => handleNotificationWhenAvailable(product)}>
                      <View className="bg-[#497320] w-full flex items-center py-2 rounded-xl">
                        <Text className="text-white">
                          Notify when available
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handleBuyNow(product)}>
                      <View className="bg-[#497320] w-full flex items-center py-2 rounded-xl">
                        <Text className="text-white">Buy Now</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View className="m-2 flex flex-row flex-wrap">
                <View className="border-2 p-1 border-[#d9d9d9]">
                  <Text>{product.category}</Text>
                </View>
                {product.courseName && (
                  <View className="border-2 p-1 border-[#d9d9d9] ml-2">
                    <Text>{product.courseName}</Text>
                  </View>
                )}
                {product.semester && (
                  <View className="border-2 p-1 border-[#d9d9d9] ml-2">
                    <Text>Semester {product.semester}</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        <Modal modalState={isModalVisible}>
          <SortModal
            hideModal={() => setModalVisible(false)}
            sortData={handleSortField}></SortModal>
        </Modal>

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

export default MarketHome;
