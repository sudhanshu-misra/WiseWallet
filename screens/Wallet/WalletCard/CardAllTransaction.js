




/*
export default function CardTransaction({navigation}) {
  return (
    <View>
     <CustomHeader navigation={navigation} />
      <Text>Card Transaction</Text>


    </View>
  );
}

*/

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import CustomHeader from '../../components/Header';


<CustomHeader navigation={navigation} />

const transactions = [
  { id: 1, time: '7:30 AM', merchant: 'LCBO', amount: 145 },
  { id: 2, time: '', merchant: 'Walmart', amount: 170 },
  { id: 3, time: '', merchant: 'Zara', amount: 68 },
  { id: 4, time: '', merchant: 'NVD', amount: 67 },
  { id: 5, time: '', merchant: 'Home Depot', amount: 67 },
  { id: 6, time: '', merchant: 'Barnes & Noble', amount: 189 },
  { id: 7, time: '', merchant: 'Home Depot', amount: 824 },
  { id: 8, time: '', merchant: 'T-Mobile', amount: 90 },
  { id: 9, time: '', merchant: 'La Fitness', amount: 300 },
  { id: 10, time: '', merchant: 'Amazon', amount: 30 },
  { id: 11, time: '', merchant: 'Ralph\'s', amount: 55 },
  { id: 12, time: '', merchant: 'CVS', amount: 15 },
  { id: 13, time: '', merchant: 'Amazon', amount: 20 },
];

const CardAllTransaction = ({ transaction }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
      <Text>{transaction.time}</Text>
      <Text>{transaction.merchant}</Text>
      <Text>${transaction.amount}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CardAllTransaction; 