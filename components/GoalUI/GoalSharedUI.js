import {View, Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/theme';
import GoalIcons from './GoalIcons';
// import { VictoryPie } from 'victory-native';
// import {Svg} from 'react-native-svg';
// import Pie from 'react-native-pie';
// import {PieChart} from 'react-native-gifted-charts';
 

const data = [
  { key: 'Buy Item 1', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 6000, rsLeft: 1000, totalRsSaving: 5000 },
  { key: 'Buy Item 2', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 8000, rsLeft: 2000, totalRsSaving: 6000 },
  { key: 'Buy Item 3', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 8500, rsLeft: 1500, totalRsSaving: 7000 },
  { key: 'Buy Item 4', startDate: '01/01/2024', endDate: '12/31/2024', Amount: 9200, rsLeft: 1200, totalRsSaving: 8000 },
];

const GoalSharedUI = ({name, icon , onClick}) => {
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
      <Icon name="shopping-bag" size={23} color="#FF5733" />
    
    </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Buy item 1</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs {data[0].Amount}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="shopping-bag" size={23} color="orange" />
  </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Buy item 2</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs {data[1].Amount}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="shopping-bag" size={23} color="#33FF57" />
  </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Buy item 3</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs {data[2].Amount}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 85, height: 85, padding: 3, margin: 2.5, borderWidth: 1.5, borderColor: '#888', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
      <Icon name="shopping-bag" size={25} color='#3357FF' />
  </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>Buy item 4</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>Rs {data[3].Amount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  


    <View className="w-max h-auto p-4 m-5 border-[2.5px] rounded-[20px] border-slate-400 flex justify-center items-center">
        <GoalIcons icon={icon}></GoalIcons>
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

export default GoalSharedUI;
