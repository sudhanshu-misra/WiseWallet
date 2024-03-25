import {View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import GlobalContext from '../../helpers/GlobalContext';
import { useContext, useState, useEffect } from 'react';
import { date } from 'yup';
import { current } from '@reduxjs/toolkit';

const OrderScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");


  useEffect(() => {
    // Simulated sample data
    const sampleProducts = [
      { id: 1, name: 'Diary', price: 10, seller: { name: 'Student 1', id: '1000014132@dit.edu.in' }, image: 'http://surl.li/rvebm', category: 'Textbooks' },
      { id: 2, name: 'Wooden Chair', price: 20, seller: { name: 'Student 2', id: '1000014133@dit.edu.in' }, image: 'http://surl.li/rvetu', category: 'Furniture' },
      { id: 3, name: 'Shirt', price: 30, seller: { name: 'Student 3', id: '1000014134@dit.edu.in' }, image: 'http://surl.li/rvfbp', category: 'Clothing' },
      { id: 4, name: 'Electric Iron', price: 40, seller: { name: 'Student 4', id: '1000014135@dit.edu.in' }, image: 'http://surl.li/rvevt', category: 'Appliances' },
      { id: 5, name: 'C-type Charger', price: 50, seller: { name: 'Student 5', id: '1000014136@dit.edu.in' }, image: 'http://surl.li/rvewx', category: 'Electronics' },
      { id: 6, name: 'Drafter scale', price: 60, seller: { name: 'Student 6', id: '1000014137@dit.edu.in' }, image: 'http://surl.li/rwaqk', category: 'Stationery' },
    ];
    setProducts(sampleProducts);
  }, []);


const handleProductPress = (product) => {
  // Navigate to product details screen or perform any action
  console.log('Product pressed:', product);
};


const handleBuyNow = (product) => {
  navigation.navigate('Buy', { product });  
}

const handleCancel = (product) => {
  // Filter out the product that needs to be canceled
  const updatedOrderData = orderData.filter(item => item.id !== product.id);
  // Update the order data state with the filtered array
  setorderData(updatedOrderData);
}

const Notification = ({ message }) => (
  <View style={styles.notificationContainer}>
    <Text style={styles.notificationText}>{message}</Text>
  </View>
);

const currentDate = new Date().toLocaleDateString('en-GB'); // 'en-GB' locale format: dd/mm/yyyy

const currentTime = new Date().toLocaleTimeString();

const {orderData, setorderData} = useContext(GlobalContext);
console.log(orderData);


  return (
    <ScrollView backgroundColor="white">
      <View>
        <CustomHeader navigation={navigation} />
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Your Orders</Text>
        {orderData.map((item, index) => (

    <View>
      <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <TouchableOpacity onPress={() => handleProductPress(item)}>
          <View style={styles.imageContainer}>
            {/* Apply opacity style for the image */}
            <Image source={{ uri: item.image }} style={[styles.productImage, item.name === 'Drafter scale' && styles.fadedImage]} />
            {item.name === 'Drafter scale' && (
              <View style={styles.notAvailableContainer}>
                <Text style={styles.notAvailableText}>Not Available</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

         <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Rs {item.price}</Text>
          <Text style={styles.sellerInfo}>Seller Name: {item.seller.name}</Text>
          <Text>({item.seller.id})</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleCancel(item)}
        >
          <Text style={styles.addToCartButtonText}>
          Cancel Order
          </Text>
        </TouchableOpacity>

        <Text size = "large"> Order date and time: {currentDate}  </Text>
        <Text> {currentTime} </Text>
    </View>
   
  </View>

    </View>
    
  ))}

      </View>
      
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
  productPrice:
 {
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
    transform: [{ translateX: 20 }, { translateY: 20 }],
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
});

export default OrderScreen;
