import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default function Filter({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleClear = () => {
    setSelectedOptions([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          
          </TouchableOpacity>

          <Text style={styles.headerTitle}>FILTER</Text>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Filter by date:</Text>
        <View style={styles.selectionContainer}>
          <TouchableOpacity
            style={[styles.selectionBox, selectedOptions.includes('current') && styles.selected]}
            onPress={() => handleOptionToggle('current')}>
            <Text>Current Transaction</Text>
            {selectedOptions.includes('current') && <MaterialIcons name="check" size={20} color="white" />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectionBox, selectedOptions.includes('week') && styles.selected]}
            onPress={() => handleOptionToggle('week')}>
            <Text>By Week</Text>
            {selectedOptions.includes('week') && <MaterialIcons name="check" size={20} color="white" />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectionBox, selectedOptions.includes('month') && styles.selected]}
            onPress={() => handleOptionToggle('month')}>
            <Text>By Month</Text>
            {selectedOptions.includes('month') && <MaterialIcons name="check" size={20} color="white" />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectionBox, selectedOptions.includes('year') && styles.selected]}
            onPress={() => handleOptionToggle('year')}>
            <Text>By Year</Text>
            {selectedOptions.includes('year') && <MaterialIcons name="check" size={20} color="white" />}
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Filter by keyword:</Text>
        <Text>Use words for the discretion.</Text>
        <TextInput style={styles.textBox} placeholder="Cost" />

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
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
    padding: 10,
  },
  backButton: {
    padding: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  selectionBox: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#96ac7c',
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  applyButton: {
    backgroundColor: '#507424',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 11,
   
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  clearButton: {
    borderWidth: 1,
    borderColor: '#507424',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 11,
  },
  clearText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#507424',
  }
});
