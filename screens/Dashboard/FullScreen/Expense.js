import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../../constants/host';
import axios from 'axios';

export default function ExpenseHome({navigation}) {
  const [loading, setLoading] = useState(true);
  const [expenseData, setExpenseData] = useState([]);

  const getExpenseData = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem('token');
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/transaction/get-transactions`,
        config,
      );
      const transactions = response.data.transactions;
      setExpenseData(
        transactions.filter(transaction => transaction.type === 'Expense'),
      );
    } catch (error) {
      console.log(error);
    }
    console.log(expenseData);
    setLoading(false);
  };

  useEffect(() => {
    getExpenseData();
  }, []);

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>EXPENSE</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <MaterialIcons name="filter-list" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {loading && <ActivityIndicator size="large" color="#497320" />}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingHorizontal: -1,
            }}>
            {expenseData.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemText}>
                    {item.name} ({item.category})
                  </Text>
                  <Text style={styles.dateText}>{item.date.slice(0, 10)}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Menu style={styles.threeButton}>
                    <MenuTrigger>
                      <MaterialIcons name="more-vert" size={20} color="black" />
                    </MenuTrigger>
                    <MenuOptions>
                      <MenuOption onSelect={() => console.log('Edit selected')}>
                        <Text>Edit</Text>
                      </MenuOption>
                      <MenuOption
                        onSelect={() => console.log('Delete selected')}>
                        <Text>Delete</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
                <Text style={{marginTop: 20}}>Rs {item.amount}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 60,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollViewContent: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    padding: 6,
    margin: 8,
    borderWidth: 1.5,
    borderColor: '#6B7280',
  },
  itemText: {
    fontSize: 15,
    color: '#333',
    marginTop: -5,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 7,
  },

  rsText: {
    fontSize: 19,
    color: '#333',
    marginBottom: -27,
    marginLeft: 21,
  },
  backButton: {},
  threeButton: {
    marginLeft: 'auto',
    marginRight: -48,
    marginTop: -25,
    marginBottom: -20,
  },
});
