import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Orders = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Textbooks', 'Electronics', 'Furniture', 'Clothing', 'Appliances', 'Sports Equipment', 'Stationery', 'Musical Instruments', 'Kitchenware', 'Books', 'Art Supplies', 'Room Decor', 'Fitness & Wellness', 'Tickets & Events', 'Miscellaneous'];

  useEffect(() => {
    // Simulated sample data
    const sampleProducts = [
      { id: 1, name: 'Product 1', price: 10, seller: { name: 'Student 1', id: '1000014132@dit.edu.in' }, image: 'http://surl.li/rvebm', category: 'Electronics' },
      { id: 2, name: 'Product 2', price: 20, seller: { name: 'Student 2', id: '1000014133@dit.edu.in' }, image: 'https://via.placeholder.com/150', category: 'Furniture' },
      { id: 3, name: 'Product 3', price: 30, seller: { name: 'Student 3', id: '1000014134@dit.edu.in' }, image: 'https://via.placeholder.com/150', category: 'Clothing' },
      { id: 4, name: 'Product 4', price: 40, seller: { name: 'Student 4', id: '1000014135@dit.edu.in' }, image: 'https://via.placeholder.com/150', category: 'Appliances' },
      { id: 5, name: 'Product 5', price: 50, seller: { name: 'Student 5', id: '1000014136@dit.edu.in' }, image: 'https://via.placeholder.com/150', category: 'Books' },
    ];
    setProducts(sampleProducts);
  }, []);

  const handleProductPress = (product) => {
    // Navigate to product details screen or perform any action
    console.log('Product pressed:', product);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleProductPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Rs {item.price}</Text>
      <Text style={styles.sellerInfo}>Sold by: {item.seller.name} ({item.seller.id})</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, item === selectedCategory && styles.selectedCategory]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.title}>BUY</Text>
      <FlatList
        data={products.filter(product => !selectedCategory || product.category === selectedCategory)}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
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
});

export default Orders;
