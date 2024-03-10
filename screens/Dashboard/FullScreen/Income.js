import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default function IncomeHome({ navigation }) {
  // Example static date, you can replace this with dynamic dates as needed
  const exampleDate = "2024-03-05";



  const IncomeNames = ['Monthly Paycheck', 'Mileage Compensation', 'Dining Refund', 'Pantry Support'];

  const IncomeCategory = ['Salary', 'Transport', 'Restaurant', 'Grocery'];

  const IncomeData = [
    {value: 160, date: '1 Jan 2024'},
      {value: 180, date: '2 Jan 2024'},
      {value: 190, date: '3 Jan 2024'},
      {value: 180, date: '4 Jan 2024'},
      {value: 140, date: '5 Jan 2024'},
      // {value: 190, date: '6 Jan 2024'},
      {value: 380, date: '6 Jan 2024'},
      {value: 160, date: '7 Jan 2024'},
      {value: 200, date: '8 Jan 2024'},
    
      {value: 220, date: '9 Jan 2024'},
      {
        value: 240,
        date: '10 Jan 2024',
        label: '10 Jan',
        labelTextStyle: {color: 'lightgray', width: 44},
      },
      {value: 280, date: '11 Jan 2024'},
      {value: 260, date: '12 Jan 2024'},
      {value: 340, date: '13 Jan 2024'},
      {value: 385, date: '14 Jan 2024'},
      {value: 280, date: '15 Jan 2024'},
      {value: 390, date: '16 Jan 2024'},
    
      {value: 370, date: '17 Jan 2024'},
      {value: 285, date: '18 Jan 2024'},
      {value: 295, date: '19 Jan 2024'},
      {
        value: 300,
        date: '20 Jan 2024',
        label: '20 Jan',
        labelTextStyle: {color: 'lightgray', width: 44},
      },
      {value: 280, date: '21 Jan 2024'},
      {value: 295, date: '22 Jan 2024'},
      {value: 260, date: '23 Jan 2024'},
      {value: 255, date: '24 Jan 2024'},
    
      {value: 190, date: '25 Jan 2024'},
      {value: 220, date: '26 Jan 2024'},
      {value: 205, date: '27 Jan 2024'},
      {value: 230, date: '28 Jan 2024'},
      {value: 210, date: '29 Jan 2024'},
      {
        value: 200,
        date: '30 Jan 2024',
        label: '30 Jan',
        labelTextStyle: {color: 'lightgray', width: 44},
      },
      {value: 240, date: '1 Feb 2024'},
      {value: 250, date: '2 Feb 2024'},
      {value: 280, date: '3 Feb 2024'},
      {value: 250, date: '4 Feb 2024'},
      {value: 210, date: '5 Feb 2024'},
      
    // Your ptData array...
  ];
  
  
  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>INCOME</Text>

          <TouchableOpacity onPress={() => console.log('Filter button pressed')}>
            <MaterialIcons name="filter-list" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: -1 }}>
            {IncomeData.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemText}>{IncomeNames[index]} ({IncomeCategory[index]}): Rs {item.value}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View style={styles.randomNumberContainer}>
                  <Menu>
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
    backgroundColor: 'white',
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
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  randomNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rsText: {
    fontSize: 19,
    color: '#333',
    marginBottom: -27,
    marginLeft: 21
  },
  randomNumber: {
    fontSize: 18,
    color: '#333',
    marginRight: -19,
    marginBottom: -27 
  },
  backButton: {
  
  },
});
