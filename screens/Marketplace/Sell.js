import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';

const Sell = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [image, setImage] = useState('');
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


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SELL</Text>
        <View style={styles.categories}>
       
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Select Category:</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.categoryItem, item === selectedCategory && styles.selectedCategory]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.formLabel}>Enter Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
        <Text style={styles.formLabel}>Enter ID:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder="Enter your ID"
        />
        <Text style={styles.formLabel}>Enter Product Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setProductName}
          value={productName}
          placeholder="Enter product name"
        />
        <Text style={styles.formLabel}>Enter Product Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setProductPrice}
          value={productPrice}
          placeholder="Enter product price"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Upload Image:</Text>
        <Button  style={styles.button1} title="Choose Image" onPress={() => console.log('Choose Image')} />
       
    
        <Button style={styles.button2} title="Submit" color={'darkgreen'} onPress={() => console.log('Submitted')} />
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categories: {
    flex: 1,
    marginLeft: 10,
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
  formContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
  },
  formLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  formControl: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
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
  button1: {
    marginTop: 20,
 
  },
  button2: {
    marginTop: 20,
    
  }

});

export default Sell;
