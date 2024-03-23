import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/Header';


export default function Marketplace({ navigation }) {
  return (
    
    <View style={styles.container}>
       <CustomHeader navigation={navigation} />

      <Text style={styles.title}>MARKETPLACE</Text>
      <Text style={styles.subtitle}>What would you like to do:</Text>

      {/* Buy Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]}
        onPress={() => navigation.navigate('Buy')}
      >
        <Icon name="shopping-cart" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>

      {/* Sell Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF9800' }]}
        onPress={() => navigation.navigate('Sell')}
      >
        <Icon name="dollar" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Sell</Text>
      </TouchableOpacity>

      {/* My Cart Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#2196F3' }]}
        onPress={() => navigation.navigate('MyCart')}
      >
        <Icon name="shopping-cart" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>My Cart</Text>
      </TouchableOpacity>

      {/* Orders Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#9C27B0' }]}
        onPress={() => navigation.navigate('Orders')}
      >
        <Icon name="list" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    marginRight: 130,

  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});
