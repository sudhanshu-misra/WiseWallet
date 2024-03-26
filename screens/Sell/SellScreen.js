import React, {useState, useContext} from 'react';
import CustomHeader from '../../components/Header';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
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
import StatusModal from '../../components/Modal/StatusModal.js';

import AsyncStorage from '@react-native-async-storage/async-storage';
import host from '../../constants/host.js';
import axios from 'axios';
import GlobalContext from '../../helpers/GlobalContext.js';

const SellScreen = ({navigation}) => {
  const [categoryError, setCategoryError] = useState('');
  const [category, setCategory] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });

  const {fetchProducts, setFetchProducts} = useContext(GlobalContext);
  //pick image
  const productImageHandler = async () => {
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
    } catch (err) {
      console.log(err);
    }
  };

  //upload on cloudinary

  const cloudinaryUpload = async photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'konykusz');
    data.append('cloud_name', 'dkanjxccl');
    SetstatusVisible({visibility: true, modaltype: 'loader'});

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
      SetstatusVisible({visibility: true, modaltype: 'failed'});
    });

    if (response.ok) {
      SetstatusVisible({visibility: false, modaltype: 'loader'});
    }

    const imagedata = await response.json();
    return imagedata.url;
  };

  const categoryData = categoryName => {
    setCategory(categoryName);
    // category = categoryName;
  };

  // on submittion
  const formSubmitHandler = async (values, actions) => {
    if (category != '') {
      if (imgUrl != '') {
        const data = {
          productImage: imgUrl,
          productDescription: values.description,
          productCondition: values.condition,
          productName: values.product,
          category: category,
          price: parseFloat(values.price),
        };
        //console.log(data);

        //axios send req
        //send data to backend

        const token = await AsyncStorage.getItem('token');
        try {
          let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await axios.post(
            `${host.apiUrl}/api/product/create-product`,
            data,
            config,
          );

          //response is done //

          if (response.data) {
            SetstatusVisible({visibility: true, modaltype: 'success'});
            setFetchProducts(2);
          }
        } catch (err) {
          SetstatusVisible({visibility: true, modaltype: 'failed'});
          console.log(err);
        }

        //handle status state
        //not handled

        setImgUrl('');
        actions.resetForm();
      } else {
        console.log('error upload image ');
      }
    } else {
      setCategoryError('choose a category');
    }
  };

  return (
    <View className="h-full w-full" backgroundColor="white">
      <CustomHeader navigation={navigation} />
      <ScrollView className="h-max m-8 " showsVerticalScrollIndicator={false}>
        <Text
          style={{color: COLORS.primary}}
          r
          className="text-2xl text-center font-bold">
          Be a Seller
        </Text>
        <Text style={{color: COLORS.primary}} className="m-2 text-center">
          Enter your product details here
        </Text>
        <Formik
          initialValues={{
            description: '',
            condition: '',
            product: '',
            price: '',
          }}
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

              <View className="mt-2">
                <Text className="ml-5 text-lg">Product:</Text>
                <TextInput
                  onChangeText={handleChange('product')}
                  onBlur={handleBlur('product')}
                  value={values.product}
                  style={styles.textInput}
                  placeholder="Enter product name"
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
                  placeholder="Rs. amount"
                  className={`bg-white ${
                    touched.price && errors.price && 'border-red-600'
                  }`}
                />
                {errors.price && touched.price && (
                  <Text className="text-red-700 ml-5">{errors.price}</Text>
                )}
              </View>
              <View className="mt-2 ">
                <Text className="ml-5 text-lg">Product description :</Text>
                <TextInput
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  style={styles.textInput}
                  placeholder="List key features and specifications."
                  className={`bg-white `}
                  multiline={true}
                  numberOfLines={2}
                />
                {/* {errors.name && touched.name && (
                  <Text className="text-red-700 ml-5">{errors.name}</Text>
                )} */}
              </View>

              <View className="mt-2">
                <Text className="ml-5 text-lg">Product condition:</Text>
                <TextInput
                  onChangeText={handleChange('condition')}
                  onBlur={handleBlur('condition')}
                  value={values.condition}
                  style={styles.textInput}
                  placeholder="Describe item's condition"
                  className={`bg-white`}
                  // multiline={true}
                  // numberOfLines={2}
                />
                {/* {errors.con && touched.id && (
                  <Text className="text-red-700 ml-5">{errors.id}</Text>
                )} */}
              </View>

              {/* product Image */}
              <View className="mt-2">
                <Text className="ml-5 text-lg ">Product Image:</Text>
                <TouchableOpacity onPress={productImageHandler}>
                  <View>
                    {imgUrl ? (
                      <Image
                        source={{uri: imgUrl}}
                        className="mt-1 ml-7 h-16 w-16"
                        resizeMode="contain"
                      />
                    ) : (
                      <View className="mt-1 ml-7">
                        <Icon
                          name="camera"
                          size={30}
                          style={{color: COLORS.primary}}></Icon>
                      </View>
                    )}
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
        <StatusModal
          modalType={statusVisible.modaltype}
          modalState={statusVisible.visibility}
          hideModal={() => {
            SetstatusVisible(prev => {
              return {visibility: false, modaltype: prev.modaltype};
            });
          }}
          message={
            (statusVisible.modaltype === 'failed' && 'An Error Occured') ||
            (statusVisible.modaltype === 'success' && 'Added Successfully') ||
            (statusVisible.modaltype === 'loader' &&
              'Loaing Image please wait...')
          }></StatusModal>
      </ScrollView>
    </View>
  );
};

const validationSchema = Yup.object().shape({
  // name: Yup.string().required('Name is required').min(3, 'Too Short!'),
  // id: Yup.string().required('ID is required'),
  product: Yup.string()
    .required('Product name is required')
    .min(3, 'Too Short!'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
});

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    marginBottom: 2,
    marginHorizontal: 15,
    fontSize: 18,
  },
});

export default SellScreen;
