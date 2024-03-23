import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import GlobalContext from '../../helpers/GlobalContext';
import { useContext } from 'react';


const CartScreen = ({navigation}) => {

  const {cartData, setcartData} = useContext(GlobalContext);
  console.log(cartData);
  return (
    <ScrollView>
      <View>
        <CustomHeader navigation={navigation} />
  {cartData.map((item, index) => (
    <View
      key={index}
      style={{
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

      }}
    >
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  ))}

      </View>
    </ScrollView>
  );
};

export default CartScreen;
