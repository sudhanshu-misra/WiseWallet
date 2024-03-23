import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Buy = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const categories = ['Textbooks', 'Electronics', 'Furniture', 'Clothing', 'Appliances', 'Sports Equipment', 'Stationery', 'Musical Instruments', 'Kitchenware', 'Books', 'Art Supplies', 'Room Decor', 'Fitness & Wellness', 'Tickets & Events', 'Miscellaneous'];

  useEffect(() => {
    // Simulated sample data
    const sampleProducts = [
      { id: 1, name: 'Diary', price: 10, seller: { name: 'Student 1', id: '1000014132@dit.edu.in' }, image: 'http://surl.li/rvebm', category: 'Textbooks' },
      { id: 2, name: 'Wooden Chair', price: 20, seller: { name: 'Student 2', id: '1000014133@dit.edu.in' }, image: 'http://surl.li/rvetu', category: 'Furniture' },
      { id: 3, name: 'Shirt', price: 30, seller: { name: 'Student 3', id: '1000014134@dit.edu.in' }, image: 'http://surl.li/rvfbp', category: 'Clothing' },
      { id: 4, name: 'Electric Iron', price: 40, seller: { name: 'Student 4', id: '1000014135@dit.edu.in' }, image: 'http://surl.li/rvevt', category: 'Appliances' },
      { id: 5, name: 'C-type Charger', price: 50, seller: { name: 'Student 5', id: '1000014136@dit.edu.in' }, image: 'http://surl.li/rvewx', category: 'Electronics' },
    ];
    setProducts(sampleProducts);
  }, []);

  const handleProductPress = (product) => {
    // Navigate to product details screen or perform any action
    console.log('Product pressed:', product);
  };

  const handleAddToCart = (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);

    if (!itemExists) {
      setCartItems([...cartItems, product]);
      setNotificationMessage(`${product.name} added to your cart.`);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  const handleGoToCart = () => {
    navigation.navigate('MyCart'); // Navigate to MyCart screen
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Rs {item.price}</Text>
        <Text style={styles.sellerInfo}>Seller Name: {item.seller.name}</Text>
        <Text>({item.seller.id})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => cartItems.some((cartItem) => cartItem.id === item.id) ? handleGoToCart() : handleAddToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>
          {cartItems.some((cartItem) => cartItem.id === item.id) ? 'Go to Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, item === selectedCategory && styles.selectedCategory]}
      onPress={() => {
        setSelectedCategory(selectedCategory === item ? null : item);
      }}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const Notification = ({ message }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationText}>{message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={true}
        />
      </View>
      <Text style={styles.title}>BUY</Text>
      
      <FlatList
        data={products.filter(product => !selectedCategory || product.category === selectedCategory)}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />

      {showNotification && <Notification message={notificationMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  productItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -100 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  notificationText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Buy;
