import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import HeadBack from '../../../components/BackHeader';
import {
  productCategory,
  collegePrograms,
  doctoralPrograms,
  undergraduateCourses,
  postgraduateCourses,
  semester,
  postGrad_semester,
} from '../../../components/Form/Icon/IconData';
import {RadioButton} from 'react-native-paper';
import ButtonComp from '../../../components/ButtonComp';
import GlobalContext from '../../../helpers/GlobalContext';

const MarketFilter = ({navigation}) => {
  const [selected, setSelected] = useState('category');
  const [categoryName, setCategoryName] = useState('');
  const [programName, setProgramName] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [courseName, setCourseName] = useState('');
  const [semesterValue, setSemesterValue] = useState('');

  const {setFilterType} = useContext(GlobalContext);

  const categoryHandler = () => {
    setSelected('category');
  };

  const programHandler = () => {
    setSelected('program');
  };

  const priceHandler = () => {
    setSelected('price');
  };

  const clearFilterValues = () => {
    setCategoryName('');
    setProgramName('');
    setPriceValue('');
    setCourseName('');
    setSemesterValue('');
    setFilterType({
      category: '',
      price: '',
      programName: '',
      courseName: '',
      semester: '',
    });
    navigation.goBack();
  };
  const submitFilterValues = () => {
    const FilterValues = {
      categoryName,
      programName,
      courseName,
      semesterValue,
      priceValue,
    };
    console.log(FilterValues);
    setFilterType({
      category: categoryName,
      price: priceValue,
      programName: programName,
      courseName: courseName,
      semester: semesterValue,
    });
    navigation.goBack();
  };

  return (
    <View className="h-full w-full" backgroundColor="white">
      <HeadBack title="FILTER" navigation={navigation} />

      <View className=" w-full h-full flex  bg-gray-300 ">
        <View className="flex flex-row w-full flex-[75%]">
          <View className="flex-[40%] mt-1 flex">
            <Pressable
              className={`  p-3 ${selected === 'category' && 'bg-white'}`}
              onPress={categoryHandler}>
              <Text className="text-[17px] ml-2 text-black">Category</Text>
            </Pressable>
            <Pressable
              className={`p-3 ${selected === 'program' && 'bg-white'}`}
              onPress={programHandler}>
              <Text className="text-[17px] ml-2 text-black">Program</Text>
            </Pressable>
            <Pressable
              className={`p-3 ${selected === 'price' && 'bg-white'}`}
              onPress={priceHandler}>
              <Text className="text-[17px] ml-2 text-black">Price</Text>
            </Pressable>
          </View>

          <ScrollView
            className="flex-[60%] mt-1  bg-white "
            showsVerticalScrollIndicator={false}>
            {/* Category */}
            {selected === 'category' &&
              productCategory.map((product, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={product}
                      status={
                        categoryName === product ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCategoryName(product)}
                    />
                    <Text className="ml-2">{product}</Text>
                  </View>
                );
              })}

            {/* Programs */}

            {selected === 'program' &&
              !programName &&
              collegePrograms.map((program, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2">
                    <Pressable onPress={() => setProgramName(program)}>
                      <Text className="ml-2 text-sm">{program}</Text>
                    </Pressable>
                  </View>
                );
              })}

            {/* courses */}
            {selected === 'program' &&
              programName === 'UNDERGRADUATE PROGRAMS' &&
              !courseName &&
              undergraduateCourses.map((course, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2 ">
                    <Pressable onPress={() => setCourseName(course)}>
                      <Text className="ml-2 text-sm">{course}</Text>
                    </Pressable>
                  </View>
                );
              })}
            {selected === 'program' &&
              programName === 'POSTGRADUATE PROGRAMS' &&
              !courseName &&
              postgraduateCourses.map((course, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2">
                    <Pressable onPress={() => setCourseName(course)}>
                      <Text className="ml-2 text-sm">{course}</Text>
                    </Pressable>
                  </View>
                );
              })}
            {selected === 'program' &&
              programName === 'DOCTORAL PROGRAMS' &&
              !courseName &&
              doctoralPrograms.map((course, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2">
                    <Pressable onPress={() => setCourseName(course)}>
                      <Text className="ml-2 text-sm">{course}</Text>
                    </Pressable>
                  </View>
                );
              })}

            {/* semester */}

            {selected === 'program' &&
              (programName === 'DOCTORAL PROGRAMS' ||
                programName === 'UNDERGRADUATE PROGRAMS') &&
              courseName &&
              semester.map((sem, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={sem}
                      status={semesterValue === sem ? 'checked' : 'unchecked'}
                      onPress={() => setSemesterValue(sem)}
                    />
                    <Text className="ml-2 text-sm">{sem}</Text>
                  </View>
                );
              })}

            {selected === 'program' &&
              programName === 'POSTGRADUATE PROGRAMS' &&
              courseName &&
              postGrad_semester.map((sem, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={sem}
                      status={semesterValue === sem ? 'checked' : 'unchecked'}
                      onPress={() => setSemesterValue(sem)}
                    />
                    <Text className="ml-2 text-sm">{sem}</Text>
                  </View>
                );
              })}

            {/* price */}

            {selected === 'price' &&
              priceFilter.map((value, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={value}
                      status={priceValue === value ? 'checked' : 'unchecked'}
                      onPress={() => setPriceValue(value)}
                    />
                    <Text className="ml-2 text-sm">{value}</Text>
                  </View>
                );
              })}
          </ScrollView>
        </View>

        {/* Buttons */}
        <View className="flex-[24%] items-center mt-4">
          <Pressable className="w-3/5" onPress={submitFilterValues}>
            <ButtonComp title="Apply"></ButtonComp>
          </Pressable>
          <Pressable className="w-3/5" onPress={clearFilterValues}>
            <View>
              <Text className="text-center font-bold text-lg mt-2">Clear</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MarketFilter;

const priceFilter = [
  'Rs. 500 and Below',
  'Rs. 501 - Rs. 1000',
  'Rs. 1001 - Rs. 5000',
  'Rs. 5000 and Above',
];
