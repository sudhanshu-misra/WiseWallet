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
  const {wishlistData, setWishlistData} = useContext(GlobalContext);
  const {fetchOrders, setFetchOrders, fetchProducts, setFetchProducts} =
    useContext(GlobalContext);
  // const [products, setProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [cartItems, setCartItems] = useState([]);
  // const [showNotification, setShowNotification] = useState(false);
  // const [notificationMessage, setNotificationMessage] = useState("");

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

  const handleBuyNow = async product => {
    console.log(product);
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        `${host.apiUrl}/api/order/create-order`,
        {
          product: product,
          price: product.price,
          orderStatus: 'Pending',
        },
        config,
      );
      console.log(response.data);
      setWishlistData(wishlistData.filter(item => item.id !== product.id));
      console.log(fetchOrders, 'space', fetchProducts);
      setFetchOrders(3);
      setFetchProducts(3);
      SetstatusVisible({
        visibility: true,
        modaltype: 'success',
        message: 'Order placed successfully',
      });
    } catch (error) {
      console.log(error);
      SetstatusVisible({
        visibility: true,
        modaltype: 'failed',
        message: 'Failed to place order',
      });
    }
    // const itemExists = orderData.some(item => item.id === product._id);
    // if (!itemExists) console.log('Product has been placed for order.', product);
    // {
    //   setorderData([...orderData, product]);
    //   setNotificationMessage(`${product.name} added to your cart.`);
    //   setShowNotification(true);
    //   setTimeout(() => {
    //     setShowNotification(false);
    //   }, 2000);
    //   const updatedCartItems = wishlistData.filter(
    //     item => item.id !== product.id,
    //   );
    //   // Update the cart items state with the filtered array
    //   setWishlistData(updatedCartItems);
    // }
  };

  const handleRemove = product => {
    // Filter out the product that needs to be removed
    const updatedCartItems = wishlistData.filter(
      item => item.id !== product.id,
    );
    // Update the cart items state with the filtered array
    setWishlistData(updatedCartItems);
  };

  const Notification = ({message}) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationText}>{message}</Text>
    </View>
  );

  // console.log(wishlistData);

  return (
    <ScrollView backgroundColor="white">
      <View>
        <CustomHeader navigation={navigation} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            margin: 10,
            alignContent: 'center',
            color: COLORS.primary,
          }}>
          Wishlist
        </Text>

        {wishlistData.map((item, index) => (
          <View key={index}>
            <View style={styles.productContainer}>
              <View style={styles.productItem}>
                <TouchableOpacity onPress={() => handleProductPress(item)}>
                  <View style={styles.imageContainer}>
                    {/* Apply opacity style for the image */}
                    <Image
                      source={{uri: item.productImage}}
                      style={[styles.productImage]}
                    />
                    {/* {item.name === 'Drafter scale' && (
                    <View style={styles.notAvailableContainer}>
                      <Text style={styles.notAvailableText}>Not Available</Text>
                    </View>
                  )} */}
                  </View>
                </TouchableOpacity>
                <View>
                  <View className="flex flex-row justify-between">
                    <Text style={styles.productName}>{item.productName}</Text>
                    <Text style={styles.productPrice}>Rs {item.price}</Text>
                  </View>
                  <Text>{item.productDescription}</Text>
                  <Text>{item.productCondition}</Text>
                </View>

                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleBuyNow(item)}>
                  <Text style={styles.addToCartButtonText}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleRemove(item)}>
                  <Text style={styles.addToCartButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/*     
      {wishlistData.length > 1 && (
        <TouchableOpacity
          style={[styles.addToCartButton, styles.buyAllButton]} 
          onPress={handleBuyAll}
        >
          <Text style={styles.addToCartButtonText}>
            Buy All
          </Text>
        </TouchableOpacity>
      )} */}
      </View>
      <StatusModal
        modalType={statusVisible.modaltype}
        modalState={statusVisible.visibility}
        hideModal={handleStatus}
        message={statusVisible.message}></StatusModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categories: {
    marginBottom: 10,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
  },
  selectedCategory: {
    backgroundColor: '#007bff',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  productList: {
    flexGrow: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productItem: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    alignItems: 'center', // Centering the image within its container
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  sellerInfo: {
    fontSize: 14,
    color: '#666',
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  notificationContainer: {
    position: 'absolute',
    bottom: 1,
    left: '50%',
    bottom: '50%',
    transform: [{translateX: 20}, {translateY: 20}],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  notificationText: {
    color: '#fff',
    textAlign: 'center',
  },
  fadedImage: {
    opacity: 0.5, // Set opacity to make the image look faded
  },
  notAvailableContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red background
    paddingVertical: 5,
  },
  notAvailableText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  notifyButtonContainer: {
    position: 'absolute',
    top: -8, // Adjust the position as needed
    right: 2, // Adjust the position as needed
  },
  notifyButton: {
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 5,
  },
  notifyButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buyAllButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buyAllButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 25,
  },
});

export default WishlistScreen;
