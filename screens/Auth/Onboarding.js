import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import ButtonComp from '../../components/ButtonComp';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const onboardingData = [
  {
    image: require('../../assets/onboarding1.png'),
    title: 'Empower your financial future',
    description: 'Securing and managing your money',
  },
  {
    image: require('../../assets/onboarding2.png'),
    title: 'Save today, and thrive tomorrow',
    description: 'Your path to financial freedom starts with every penny saved',
  },
  {
    image: require('../../assets/onboarding3.png'),
    title: 'Know where your money goes',
    description:
      'Track your transactions easily, with categories and financial report',
  },
];

const Onboarding = ({navigation}) => {
  const [imageActive, setImageActive] = useState(0);

  const onChange = nativeEvent => {
    // console.log('scrolling');
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imageActive) {
        setImageActive(slide);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View className="mt-[16vh] mb-8">
        <ScrollView
          onScroll={({nativeEvent}) => {
            onChange(nativeEvent);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{
            width: width,
            height: height * 0.5,
          }}>
          {onboardingData.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: width,
                  height: height * 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'contain',
                  }}
                />
                <View className="mb-4 flex flex-col p-5 items-center">
                  <Text className="text-black text-xl font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-gray font-normal text-center">
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View className="flex flex-row justify-center gap-2 items-center">
          {onboardingData.map((e, index) => (
            <Text
              key={e}
              className={
                imageActive == index
                  ? 'text-[#497320] text-4xl leading-10'
                  : 'text-[#7ABF36] leading-4'
              }>
              ●
            </Text>
          ))}
        </View>
      </View>
      <View className="px-4 flex flex-col gap-2">
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <ButtonComp title={'Signup'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View className="p-3 items-center rounded-xl bg-[#AFDA03]">
            <Text className="text-[#497320] font-bold text-sm">Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
