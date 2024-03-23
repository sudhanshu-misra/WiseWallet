import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet, Alert, Picker } from 'react-native';
import CustomHeader from '../../components/Header';

const SellScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const categories = ['Textbooks', 'Electronics', 'Furniture', 'Clothing', 'Appliances', 'Sports Equipment', 'Stationery', 'Musical Instruments', 'Kitchenware', 'Books', 'Art Supplies', 'Room Decor', 'Fitness & Wellness', 'Tickets & Events', 'Miscellaneous'];

  const handleSubmit = () => {
    if (!selectedCategory || !name || !id || !productName || !productPrice) {
      Alert.alert('All fields are required.');
      return;
    }

    // Here you can perform submission logic, such as sending data to a server or performing local storage operations

    // Resetting the form
    setSelectedCategory(null);
    setName('');
    setId('');
    setProductName('');
    setProductPrice('');

    Alert.alert('Product submitted successfully.');
  };

  return (
    <ScrollView backgroundColor="white">
      <View>
        <CustomHeader navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <Text style={styles.title}>SELL</Text> */}
            <View style={styles.categories}></View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>Select Category:</Text>
            
            <View style={styles.categoryContainer}>
              {/* {categories.map((category, index) => (
                <Button
                  key={index}
                  title={category}
                  onPress={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  color={category === selectedCategory ? '#007bff' : undefined}
                />
              ))} */}
            </View>
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
       
    


            <Button title="Submit" onPress={handleSubmit} color={'darkgreen'} />
          </View>
        </View>
      </View>
    </ScrollView>
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
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default SellScreen;
