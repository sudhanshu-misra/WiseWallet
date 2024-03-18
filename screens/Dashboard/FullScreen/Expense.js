import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default function ExpenseHome({ navigation }) {

  const ExpenseNames = [
    'Health Supplements',
    'Public Transit Fees',
    'Business Meals',
    'Household Supplies',
    'Medical Expenses',
    'Transportation Costs',
    'Client Dinners',
    'Home Essentials',
    'Fitness Expenses',
    'Commuter Expenses',
    'Corporate Dining',
    'Cleaning Supplies',
    'Wellness Products',
    'Subway Passes',
    'Office Meals',
    'Kitchen Supplies',
    'Gym Memberships',
    'Bus Fares',
    'Team Lunches',
    'Toiletries',
    'Personal Care Items',
    'Taxi Rides',
    'Networking Meals',
    'Laundry Detergent',
    'Supplements',
    'Train Tickets',
    'Client Entertainment',
    'Household Cleaning',
    'Health and Wellness',
    'Public Transportation',
    'Professional Meals',
    'Home Maintenance',
    'Fitness Memberships',
    'Rideshare Services',
    'Corporate Events',
    'Home Goods'
  ]
  
  const ExpenseCategory = ['Medication', 'Transport', 'Restaurant', 'Grocery'];


  const ExpenseData =[
    
    {value: 220, date: '1 Jan 2024'},
    {value: 410, date: '2 Jan 2024'},
    {value: 190, date: '3 Jan 2024'},
    {value: 180, date: '4 Jan 2024'},
    {value: 320, date: '5 Jan 2024'},
    {value: 220, date: '6 Jan 2024'},
    {value: 110, date: '7 Jan 2024'},
    {value: 335, date: '8 Jan 2024'},
    {value: 215, date: '9 Jan 2024'},
    {value: 165, date: '10 Jan 2024',  label: '10 Jan',
    labelTextStyle: {color: 'lightgray', width: 44}},
    {value: 160, date: '11 Jan 2024'},
    {value: 155, date: '12 Jan 2024'},
    {value: 145, date: '13 Jan 2024'},
    {value: 140, date: '14 Jan 2024'},
    {value: 135, date: '15 Jan 2024'},
    {value: 140, date: '16 Jan 2024'},
    {value: 145, date: '17 Jan 2024'},
    {value: 120, date: '18 Jan 2024'},
    {value: 155, date: '19 Jan 2024'},
    {value: 160, date: '20 Jan 2024',
    label: '20 Jan',
    labelTextStyle: {color: 'lightgray', width: 44}},
    {value: 165, date: '21 Jan 2024'},
    {value: 150, date: '22 Jan 2024'},
    {value: 175, date: '23 Jan 2024'},
    {value: 180, date: '24 Jan 2024'},
    {value: 185, date: '25 Jan 2024'},
    {value: 440, date: '26 Jan 2024'},
    {value: 105, date: '27 Jan 2024'},
    {value: 200, date: '28 Jan 2024'},
    {value: 205, date: '29 Jan 2024'},
    {value: 210, date: '30 Jan 2024',
    label: '30 Jan',
    labelTextStyle: {color: 'lightgray', width: 44}
  },
    {value: 215, date: '1 Feb 2024'},
    {value: 220, date: '2 Feb 2024'},
    {value: 225, date: '3 Feb 2024'},
    {value: 230, date: '4 Feb 2024'},
    {value: 235, date: '5 Feb 2024'}

];


return (
  <MenuProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>EXPENSE</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: -1 }}>
          {ExpenseData.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <View>
                <Text style={styles.itemText}>{ExpenseNames[index]} ({ExpenseCategory[index % ExpenseCategory.length]})</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <View style={{ flex: 1 }}>
              <Menu style={styles.threeButton}>
                  <MenuTrigger>
                    <MaterialIcons name="more-vert" size={20} color="black" />
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption onSelect={() => console.log('Edit selected')}>
                      <Text>Edit</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => console.log('Delete selected')}>
                      <Text>Delete</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
              <Text style={{marginTop: 20 }}>Rs {item.value}</Text>
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
    marginLeft: 21
  },
  backButton: {
  
  },
  threeButton:{
    marginLeft: 'auto',
    marginRight: -48,
    marginTop: -25,
    marginBottom: -20
  }
});
