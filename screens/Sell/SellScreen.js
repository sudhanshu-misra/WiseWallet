
//tasks

//status modal implement 
//create axios request 

// create backend to store product image

import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/Header';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {globalStyles} from '../../constants/globalStyles';
import {Button} from 'react-native-paper';
import IconPicker from '../../components/Form/Icon/IconPicker';
import {productCategory} from '../../components/Form/Icon/IconData';
import {COLORS} from '../../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';


const SellScreen = ({navigation}) => {
  const [categoryError, setCategoryError] = useState('');
  const [category,setCategory]=useState('');
  const [imgUrl, setImgUrl] = useState('');

  //pick image 
const productImageHandler= async()=>{
  try {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    const response = await launchImageLibrary(options); // Wait for image selection

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      const source = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      const cloudinaryUrl = await cloudinaryUpload(source); // Wait for upload
      setImgUrl(cloudinaryUrl);
    }
}
catch (err) {
  console.log(err);
}
};

//upload on cloudinary

const cloudinaryUpload = async photo => {
  const data = new FormData();
  data.append('file', photo);
  data.append('upload_preset', 'konykusz');
  data.append('cloud_name', 'dkanjxccl');
  //SetstatusVisible({visibility: true, modaltype: 'loader'});

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/dkanjxccl/image/upload',
    {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    },
  ).catch(err => {
    console.log(err, 'error');
   // SetstatusVisible({visibility: true, modaltype: 'failed'});
  });

  if (response.ok) {
   // SetstatusVisible({visibility: false, modaltype: 'loader'});
  }


  const imagedata = await response.json();
  return imagedata.url;
};



  const categoryData = categoryName => {
    setCategory(categoryName)
    // category = categoryName;
  };

  // on submittion
  const formSubmitHandler = (values, actions) => {
  
    if (category != '') {

      const data = {
        productImage: imgUrl,
        name: values.name,
        id: values.id,
         productName: values.product,
         category:category,
          price: parseFloat(values.price)
      };
       console.log(data);
      
      
       //axios send req

             


      //handle status state
             //not handled

           setImgUrl('');
      actions.resetForm();
    } else {
      setCategoryError('choose a category');
    }
  };

  return (
    <View className="h-full w-full">
      <CustomHeader navigation={navigation} />
      <ScrollView className="h-max m-8 ">
        <Text
          style={{color: COLORS.primary}}
          className="text-2xl text-center font-bold">
          Be a Seller
        </Text>
        <Text style={{color: COLORS.primary}} className="m-2 text-center">
          Enter your product details here
        </Text>
        <Formik
          initialValues={{name: '', id: '', product: '', price: ''}}
          validationSchema={validationSchema}
          onSubmit={formSubmitHandler}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <IconPicker
                getIcon={categoryData}
                iconError={categoryError}
                iconData={productCategory}
                title={'Category'}
                label={'Select category'}></IconPicker>

              <View className="mt-2 ">
                <Text className="ml-5 text-lg">Name:</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={styles.textInput}
                  placeholder='username'
                  className={`bg-white ${
                    touched.name && errors.name && 'border-red-600'
                  }`}
                />
                {errors.name && touched.name && (
                  <Text className="text-red-700 ml-5">{errors.name}</Text>
                )}
              </View>

              <View className="mt-2">
                <Text className="ml-5 text-lg">ID:</Text>
                <TextInput
                  onChangeText={handleChange('id')}
                  onBlur={handleBlur('id')}
                  value={values.id}
                  style={styles.textInput}
                  placeholder='student Id'
                  className={`bg-white ${
                    touched.id && errors.id && 'border-red-600'
                  }`}
                />
                {errors.id && touched.id && (
                  <Text className="text-red-700 ml-5">{errors.id}</Text>
                )}
              </View>
              <View className="mt-2">
                <Text className="ml-5 text-lg">Product:</Text>
                <TextInput
                  onChangeText={handleChange('product')}
                  onBlur={handleBlur('product')}
                  value={values.product}
                  style={styles.textInput}
                  placeholder='product name'
                  className={`bg-white ${
                    touched.product && errors.product && 'border-red-600'
                  }`}
                />
                {errors.product && touched.product && (
                  <Text className="text-red-700 ml-5">{errors.product}</Text>
                )}
              </View>
              <View className="mt-2">
                <Text className="ml-5 text-lg">Price:</Text>
                <TextInput
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  value={values.price}
                  keyboardType="numeric"
                  style={styles.textInput}
                  placeholder='Rs. amount'
                  className={`bg-white ${
                    touched.price && errors.price && 'border-red-600'
                  }`}
                />
                {errors.price && touched.price && (
                  <Text className="text-red-700 ml-5">{errors.price}</Text>
                )}
              </View>

               {/* product Image */}
                 <View className="mt-2">
                 <Text className="ml-5 text-lg ">Product Image:</Text>
               <TouchableOpacity onPress={productImageHandler}>
             <View>
               { imgUrl?
                <Image
                source={{uri: imgUrl}}
                 className="mt-1 ml-7 h-16 w-16"
                resizeMode="contain"
              /> : 
              <View className="mt-1 ml-7">
                 <Icon name="camera" size={30} style={{color:COLORS.primary}}></Icon>
              </View>
              }
              </View>
              </TouchableOpacity>
               </View>

              <TouchableOpacity onPress={handleSubmit}>
                <Button style={globalStyles.BtnView} className="mx-10 p-1 mt-5">
                  <Text className="text-base text-white">Add Product</Text>
                </Button>
              </TouchableOpacity>

            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Too Short!'),
  id: Yup.string().required('ID is required'),
  product: Yup.string().required('Product name is required').min(3, 'Too Short!'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
});

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  textInput: {
    paddingHorizontal:10,
    paddingVertical:8,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    marginBottom: 2,
    marginHorizontal: 15,
    fontSize:18
  },
});

export default SellScreen;






// const [selectedCategory, setSelectedCategory] = useState(null);
// const [name, setName] = useState('');
// const [id, setId] = useState('');
// const [productName, setProductName] = useState('');
// const [productPrice, setProductPrice] = useState('');

// const categories = ['Textbooks', 'Electronics', 'Furniture', 'Clothing', 'Appliances', 'Sports Equipment', 'Stationery', 'Musical Instruments', 'Kitchenware', 'Books', 'Art Supplies', 'Room Decor', 'Fitness & Wellness', 'Tickets & Events', 'Miscellaneous'];

// const handleSubmit = () => {
//   if (!selectedCategory || !name || !id || !productName || !productPrice) {
//     Alert.alert('All fields are required.');
//     return;
//   }

//   // Here you can perform submission logic, such as sending data to a server or performing local storage operations

//      //data object

//      //axios

//   // Resetting the form
//   setSelectedCategory(null);
//   setName('');
//   setId('');
//   setProductName('');
//   setProductPrice('');

//   Alert.alert('Product submitted successfully.');
// };

// return (
//   <ScrollView backgroundColor="white">
//     <View>
//       <CustomHeader navigation={navigation} />
//       <View style={styles.container}>
//         <View style={styles.header}>
//           {/* <Text style={styles.title}>SELL</Text> */}
//           <View style={styles.categories}></View>
//         </View>
//         <View style={styles.formContainer}>
//           <Text style={styles.formLabel}>Select Category:</Text>

//           <View style={styles.categoryContainer}>

//           {/* add a categories picker =>
//             const categories = ['Textbooks', 'Electronics', 'Furniture', 'Clothing', 'Appliances', 'Sports Equipment', 'Stationery', 'Musical Instruments', 'Kitchenware', 'Books', 'Art Supplies', 'Room Decor', 'Fitness & Wellness', 'Tickets & Events', 'Miscellaneous'];
//            */}

//             {/* {categories.map((category, index) => (
//               <Button
//                 key={index}
//                 title={category}
//                 onPress={() => setSelectedCategory(category === selectedCategory ? null : category)}
//                 color={category === selectedCategory ? '#007bff' : undefined}
//               />
//             ))} */}
//           </View>
//           <Text style={styles.formLabel}>Enter Name:</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={setName}
//             value={name}
//             placeholder="Enter your name"
//           />
//           <Text style={styles.formLabel}>Enter ID:</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={setId}
//             value={id}
//             placeholder="Enter your ID"
//           />
//           <Text style={styles.formLabel}>Enter Product Name:</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={setProductName}
//             value={productName}
//             placeholder="Enter product name"
//           />
//           <Text style={styles.formLabel}>Enter Product Price:</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={setProductPrice}
//             value={productPrice}
//             placeholder="Enter product price"
//             keyboardType="numeric"
//           />
// <Text style={styles.formLabel}>Upload Image:</Text>
//       <Button  style={styles.button1} title="Choose Image" onPress={() => console.log('Choose Image')} />
//       {/* upload image */}

//           <Button title="Submit" onPress={handleSubmit} color={'darkgreen'} />
//         </View>
//       </View>
//     </View>
//   </ScrollView>
// );
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   categories: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   formContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 20,
//     borderRadius: 10,
//   },
//   formLabel: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
// });

// export default SellScreen;
