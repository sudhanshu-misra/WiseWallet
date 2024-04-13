import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
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

  const {filterType,setFilterType} = useContext(GlobalContext);

  const categoryHandler = () => {
    setSelected('category');
  };

  const programHandler = () => {
    setSelected('program');
  };

  const priceHandler = () => {
    setSelected('price');
  };
  const excludeHandler=()=>{
    setSelected("exclude");
  }

  const clearFilterValues = () => {
    setFilterType({
      category: '',
      priceRange: '',
      programName: '',
      courseName: '',
      semester: '',
      exclude:''
    });
    navigation.goBack();
  };
  const submitFilterValues = () => {
    navigation.goBack();
  };

  return (
    <View className="h-full w-full" backgroundColor="white">
      <HeadBack title="FILTER" navigation={navigation} />

      <View className=" w-full h-full flex  bg-gray-300 ">
        <View className="flex flex-row w-full flex-[75%]">
          <View className="flex-[40%] mt-1 flex">
            <TouchableOpacity
              className={`  p-3 ${selected === 'category' && 'bg-white'}`}
              onPress={categoryHandler}>
              <Text className="text-[17px] ml-2 text-black">Category</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-3 ${selected === 'program' && 'bg-white'}`}
              onPress={programHandler}>
              <Text className="text-[17px] ml-2 text-black">Program</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-3 ${selected === 'price' && 'bg-white'}`}
              onPress={priceHandler}>
              <Text className="text-[17px] ml-2 text-black">Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-3 ${selected === 'exclude' && 'bg-white'}`}
              onPress={excludeHandler}>
              <Text className="text-[17px] ml-2 text-black">exclude</Text>
            </TouchableOpacity>
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
                       filterType.category === product ? 'checked' : 'unchecked'
                      }
                      onPress={() => setFilterType(prev=>({...prev,category:product}))}
                    />
                    <Text className="ml-2">{product}</Text>
                  </View>
                );
              })}

            {/* Programs */}

            {selected === 'program' &&
              !filterType.programName &&
              collegePrograms.map((program, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2">
                    <TouchableOpacity onPress={()=>setFilterType(prev=>({...prev,programName:program}))}>
                      <Text className="ml-2 text-sm">{program}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}

            {/* courses */}
            {selected === 'program' &&
              filterType.programName === 'UNDERGRADUATE PROGRAMS' &&
              !filterType.courseName &&
              undergraduateCourses.map((course, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2 ">
                    <TouchableOpacity onPress={()=>setFilterType(prev=>({...prev,courseName:course}))}>
                      <Text className="ml-2 text-sm">{course}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            {selected === 'program' &&
              filterType.programName === 'POSTGRADUATE PROGRAMS' &&
              ! filterType.courseName &&
              postgraduateCourses.map((course, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2">
                    <TouchableOpacity onPress={()=>setFilterType(prev=>({...prev,courseName:course}))}>
                      <Text className="ml-2 text-sm">{course}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            {selected === 'program' &&
            filterType.programName === 'DOCTORAL PROGRAMS' &&
              ! filterType.courseName &&
              doctoralPrograms.map((course, index) => {
                return (
                  <View
                    key={index}
                    className="flex-1 flex-row items-center mt-2">
                    <TouchableOpacity onPress={()=>setFilterType(prev=>({...prev,courseName:course}))}>
                      <Text className="ml-2 text-sm">{course}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })} 

            {/* semester */}

             {selected === 'program' &&
              ( filterType.programName === 'DOCTORAL PROGRAMS' ||
              filterType.programName === 'UNDERGRADUATE PROGRAMS') &&
              filterType.courseName &&
              semester.map((sem, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={sem}
                      status={filterType.semester === sem ? 'checked' : 'unchecked'}
                      onPress={()=>setFilterType(prev=>({...prev,semester:sem}))}
                    />
                    <Text className="ml-2 text-sm">{sem}</Text>
                  </View>
                );
              })}

            {selected === 'program' &&
            filterType.programName === 'POSTGRADUATE PROGRAMS' &&
            filterType.courseName &&
              postGrad_semester.map((sem, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={sem}
                      status={filterType.semester=== sem ? 'checked' : 'unchecked'}
                      onPress={()=>setFilterType(prev=>({...prev,semester:sem}))}
                    />
                    <Text className="ml-2 text-sm">{sem}</Text>
                  </View>
                );
              })}

            {/* price */}

            {selected === 'price' &&
              priceFilter.map((price, index) => {
                return (
                  <View key={index} className="flex-1 flex-row items-center ">
                    <RadioButton
                      value={price.value}
                      status={
                        filterType.priceRange === price.value ? 'checked' : 'unchecked'
                      }
                      onPress={()=>setFilterType(prev=>({...prev,priceRange:price.value}))}
                    />
                    <Text className="ml-2 text-sm">{price.label}</Text>
                  </View>
                );
              })}

              {/* exclude */}

              {selected === 'exclude' &&
                  <View className="flex-1 flex-row items-center ">
                    <RadioButton
                      status={
                          filterType.exclude ==="exclude" ? 'checked' : 'unchecked'
                      }
                      onPress={() => setFilterType(prev=>({...prev,exclude:'exclude'}))}
                    />
                    <Text className="ml-2">Exclude Out of Stock</Text>
                  </View>
               
              }

          </ScrollView>
        </View>

        {/* Buttons */}
        <View className="flex-[24%] items-center mt-4">
          <TouchableOpacity className="w-3/5" onPress={submitFilterValues}>
            <ButtonComp title="Apply"></ButtonComp>
          </TouchableOpacity>
          <TouchableOpacity className="w-3/5" onPress={clearFilterValues}>
            <View>
              <Text className="text-center font-bold text-lg mt-2">Clear</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MarketFilter;

const priceFilter = [
  {
    value: '500AndBelow',
    label: 'Rs. 500 and Below',
  },
  {
    value: '501To1000',
    label: 'Rs. 501 - Rs. 1000',
  },
  {
    value: '1001To5000',
    label: 'Rs. 1001 - Rs. 5000',
  },
  {
    value: '5001AndAbove',
    label: 'Rs. 5001 and Above',
  },
];
