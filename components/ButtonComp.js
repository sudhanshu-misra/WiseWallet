import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../constants/globalStyles';

export default function ButtonComp({title}) {
  return (
    <View>
      <View style={globalStyles.BtnView}>
        <Text style={globalStyles.BtnText}>{title}</Text>
      </View>
    </View>
  );
}
