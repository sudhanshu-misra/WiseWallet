import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
    
    const navigation = useNavigation();
    return (
        <View>
            <Text>Payment</Text>
        </View>
    )
}
