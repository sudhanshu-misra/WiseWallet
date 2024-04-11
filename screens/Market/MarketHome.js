import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import CustomHeader from '../../components/Header';
import GlobalContext from '../../helpers/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';
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
  const [sortBy, setSortBy] = useState('');
  //  sortBy values - asc(low to high) ,  desc(high to low) , new(newestfirst)

  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
    message: '',
  });

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

  const {wishlistData, setWishlistData} = useContext(GlobalContext);

  const {fetchOrders, setFetchOrders} = useContext(GlobalContext);

  const {fetchProducts, setFetchProducts} = useContext(GlobalContext);

  useEffect(() => {
    try {
      getProducts();
    } finally {
      setFetchProducts(0);
    }
  }, [fetchProducts]);

  const getProducts = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/product/get-products`,
        config,
      );
      // console.log(response.data.products);

      if (response.data) {
        console.log('products received');
        setProducts(response.data.products);
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
      console.log(err);
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
  const handleProductPress = product => {
 
  };
  // console.log("this",products);

  const handleAddToWishlist = product => {
    const itemExists = wishlistData.some(item => item.id === product._id);

    if (!itemExists) {
      console.log('Product added to wishlist:', product);
      setWishlistData([...wishlistData, product]);
      SetstatusVisible({
        visibility: true,
        modaltype: 'success',
        message: 'product added to wishlist',
      });
      setNotificationMessage(`${product.productName} added to your wishlist.`);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } else {
      SetstatusVisible({
        visibility: true,
        modaltype: 'failed',
        message: 'failed to add product to  wishlist',
      });
    }
  };

  const handleBuyNow = async product => {
    const itemExists = wishlistData.some(item => item.id === product.id);
    if (!itemExists) console.log('Product has been placed for order.', product);
    {
      await buyproduct(product);
      setNotificationMessage(`${product.productName} added to your wishlist.`);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
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

  const renderProductItem = ({item, index}) => {
    // console.log(item);
    return (
      <View style={styles.productContainer}>
        <View style={styles.productItem}>
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.imageContainer}>
              {/* Apply opacity style for the image */}
              <Image
                source={{uri: item.productImage}}
                style={[
                  styles.productImage,
                  item.isSold === false && styles.fadedImage,
                ]}
              />
              {item.isSold === true && (
                <View style={styles.notAvailableContainer}>
                  <Text style={styles.notAvailableText}>Not Available</Text>
                </View>
              )}
            </View>
            <View>
              <View className="flex flex-row justify-between">
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productPrice}>Rs {item.price}</Text>
              </View>

              <Text>Description : {item.productDescription}</Text>
              <Text>Condition : {item.productCondition}</Text>
            </View>
            {/* <Text style={styles.sellerInfo}>{}</Text> */}
          </TouchableOpacity>
          {!item.isSold && (
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToWishlist(item)}>
              <Text style={styles.addToCartButtonText}>Add to wishlist</Text>
            </TouchableOpacity>
          )}
          {!item.isSold && (
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleBuyNow(item)}>
              <Text style={styles.addToCartButtonText}>Buy Now</Text>
            </TouchableOpacity>
          )}
          {item.isSold === true && ( // Add button below the sixth image
            <View style={styles.notifyButtonContainer}>
              <TouchableOpacity
                style={styles.notifyButton}
                onPress={() => handleNotificationWhenAvailable(item)}>
                <Text style={styles.notifyButtonText}>
                  Notify Me When Available
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item === selectedCategory && styles.selectedCategory,
      ]}
      onPress={() => {
        setSelectedCategory(selectedCategory === item ? null : item);
      }}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const Notification = ({message}) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationText}>{message}</Text>
    </View>
  );

  //sort By modal handler
  const sortByModalHandler = () => {
    setModalVisible(true);
  };
  const handleSortField = sort => {
    setSortBy(sort);
    // console.log(sort)
  };
const filterHandler =()=>{
  navigation.navigate('MarketFilter');
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View backgroundColor="white">
        <CustomHeader navigation={navigation} />
        <View style={styles.container}>
          <Pressable onPress={sortByModalHandler}>
            <Text>Sort by</Text>
          </Pressable>
          <Pressable onPress={filterHandler}>
            <Text>Filter</Text>
          </Pressable>
          <View style={styles.categories}>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item}
              horizontal
              showsHorizontalScrollIndicator={true}
            />
          </View>
          {/* <Text style={styles.title}>BUY</Text> */}

          <FlatList
            data={products.filter(
              product =>
                !selectedCategory || product.category === selectedCategory,
            )}
            renderItem={renderProductItem}
            keyExtractor={item => item._id}
            contentContainerStyle={styles.productList}
          />

          {showNotification && <Notification message={notificationMessage} />}
        </View>
      </View>

      <Modal
        modalState={isModalVisible}
        // hideModal={() => setModalVisible(false)}
      >
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    // marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categories: {
    marginBottom: 20,
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
    opacity: 0.8, // Set opacity to make the image look faded
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
    // position: 'absolute',
    // top: -8, // Adjust the position as needed
    // right: 2, // Adjust the position as needed
  },
  notifyButton: {
    // backgroundColor: 'green',
    // padding: 3,
    // borderRadius: 5,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  notifyButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MarketHome;
