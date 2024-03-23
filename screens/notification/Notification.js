import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import HeadBack from '../../components/BackHeader'
import { COLORS } from '../../constants/theme'

const notifications=[
    {message:"this"},
    {message:"this"},
    {message:"this"},
    {message:"this"},
    {message:"this"},
    {message:"this"},
    {message:"this"},
    {message:"this"},
    {message:"this"},

    {message:"this"},
    {message:"this"},
    {message:"this"},

    {message:"this"},
    {message:"this"},

    {message:"this"},
    {message:"this"},    {message:"this"},


    {message:"this"},
]

const Notification = ({navigation}) => {
  return (
    <View className="h-full">
         <HeadBack navigation={navigation} title="Notification" />
         <View className="m-2 p-2">
           <Text className="m-1 text-3xl " style={{color:COLORS.success}}>
             What's New {`->`}
           </Text> 
           <Text className="text-base p-2" style={{color:COLORS.black}}>Marketplace and wallet notifications will be displayed here </Text>
         </View>
         <ScrollView>
         <View className="w-full px-5">
               { notifications &&
               notifications.map((data)=>{
                return (
                    <View className="border-2 h-max my-2 p-3 rounded-2xl"  style={{border:COLORS.black , backgroundColor:"black"}}>
                    <Text className="text-base"  style={{color:COLORS.white}}>{data.message}</Text>
                    <Text className="text-base"  style={{color:COLORS.white}}>{data.message}</Text>
                    </View>
                )
               })
              }
         </View>
         </ScrollView>
    </View>
  )
}

export default Notification