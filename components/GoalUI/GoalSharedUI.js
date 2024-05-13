import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/theme';
import GoalIcons from './GoalIcons';

const GoalSharedUI = ({data}) => {
  console.log('GoalSharedUI data', data);
  return (
    <View className="m-2">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexDirection: 'row'}}>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  width: 85,
                  height: 85,
                  padding: 3,
                  margin: 2.5,
                  borderWidth: 1.5,
                  borderColor: '#888',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={index}>
                <View style={styles.container}>
                  <Icon
                    name="shopping-bag"
                    size={23}
                    color="rgba(80, 116, 36, 1)"
                  />
                </View>
                <View style={{marginTop: 1}}>
                  <Text
                    style={{color: '#333', fontSize: 14, textAlign: 'center'}}>
                    {item.goalName}
                  </Text>
                </View>
                <View style={{marginTop: 1}}>
                  <Text
                    style={{color: '#666', fontSize: 10, textAlign: 'center'}}>
                    Rs {item.amount}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
