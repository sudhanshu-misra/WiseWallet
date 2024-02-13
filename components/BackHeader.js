import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeadBack(props) {
  return (
    <View>
      <TouchableOpacity
        className="p-2"
        onPress={() => props.navigation.goBack()}>
        <View>
          <Icon name="arrow-left" size={36} color={COLORS.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

// export default HeadBack;
