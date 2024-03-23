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
         <HeadBack navigation={navigation} title="Notifications" />
         <View className="m-2 p-2">
           <Text className="m-1 text-3xl " style={{color:COLORS.success}}>
             What's New {`->`}
           </Text> 
           <Text className="text-base p-2" style={{color:COLORS.black}}>Marketplace and wallet notifications will be displayed here </Text>
         </View>
         <ScrollView className="mb-8">
         { notifications.length>0 &&
         <View className="w-full px-5">
             
              { notifications.map((data,index)=>{
                return (
                    <View key={index} className="border-2 border-white h-max my-2 p-3 rounded-2xl"  style={{border:COLORS.white , backgroundColor:COLORS.success}}>
                    <View className="flex flex-row justify-between ">
                    <Text className="text-base"  style={{color:COLORS.white}}>title : about notification</Text>
                    <Text className="text-base"  style={{color:COLORS.white}}>01/01/2024</Text>
                    </View>
                    <Text className="text-base mt-2"  style={{color:COLORS.white}}>message: a clear long notification a clear long notification a clear long notification</Text>
                    </View>
                )
               })
              }
         </View>
         }
         {notifications.length===0 &&
            <View className="w-full flex justify-center items-center px-5 ">
                     <View className="border-2 h-max my-2 p-6 rounded-2xl"  style={{border:COLORS.black , backgroundColor:"black"}}>
                     <Text className="text-lg"  style={{color:COLORS.white}}>We don't have any updates for you yet</Text>
                    </View>
         </View>
         }
         
         </ScrollView>
    </View>
  )
}

export default Notification