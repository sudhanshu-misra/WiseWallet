import {View, Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/theme';
import BudgetIcons from './BudgetIcons';
// import { VictoryPie } from 'victory-native';
// import {Svg} from 'react-native-svg';
// import Pie from 'react-native-pie';
// import {PieChart} from 'react-native-gifted-charts';
 

const BudgetSharedUI = ({name, icon , onClick}) => {
  return (

    
    <View className=" mt-2 w-max">
      
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
    

      <View className="mx-7 flex flex-row justify-between">
        <Text className="text-xl text-black">{name}</Text>
        <Text className="text-lg" style={{color: `${COLORS.neutral}`}}
         onPress={()=>onClick()}
        >
          
          <Icon name="plus" size={16}>
            {' '}
          </Icon>{' '}
          Add new{' '}
        </Text>
        
      </View>
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="medkit" size={23} color="red" />
    
    </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Medication</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs 0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="car" size={23} color="orange" />
  </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Transport</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs 0</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="cutlery" size={23} color="#33FF57" />
  </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Restaurant</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs 0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="shopping-cart" size={25} color='blue' />
  </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Grocery</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs 0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  


    <View className="w-max h-auto p-4 m-5 border-[2.5px] rounded-[20px] border-slate-400 flex justify-center items-center">
        <BudgetIcons icon={icon}></BudgetIcons>
        <Text className="text-lg text-center px-10 text-slate-400">
          Your {name} details will be displayed here
        </Text>
      </View>
      
    </View>

    
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    color: COLORS.darkText,
  },
  itemValue: {
    fontSize: 14,
    color: COLORS.lightText,
  },
  // ... include any other styles from the date you have ...
});

export default BudgetSharedUI;
