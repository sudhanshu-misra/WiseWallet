import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default function Filter({ navigation }) {
  // Example static date, you can replace this with dynamic dates as needed
  const exampleDate = "2024-03-05";

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Filter</Text>

          <TouchableOpacity onPress={() => console.log('Filter button pressed')}>
            <MaterialIcons name="filter-list" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          
          {/* Rectangular Containers with Icons, Texts, and Dates */}
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 7 }}>
            {[...Array(8)].map((_, index) => (
              <View key={index} style={styles.itemContainer}>
                
                <View>
               
                  <Text style={styles.itemText}>Item {index + 1}</Text>
                  
                  <Text style={styles.dateText}>{exampleDate}</Text>
                  
                </View>
               
                <View style={styles.randomNumberContainer}>
                  
                  <Text style={styles.rsText}>Rs </Text>
                  
                  <Text style={styles.randomNumber}>{Math.floor(Math.random() * 1000)}</Text>
                  <Menu>
                  <MenuTrigger>
                    <MaterialIcons name="more-vert" size={20} color="black" marginTop={-18} marginRight={2}/>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 60,
    backgroundColor: '#f5f5f5',
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
