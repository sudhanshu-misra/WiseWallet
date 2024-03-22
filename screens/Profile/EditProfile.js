import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import ButtonComp from '../../components/ButtonComp';
import HeadBack from '../../components/BackHeader';
import {COLORS} from '../../constants/theme';
import StatusModal from '../../components/Modal/StatusModal';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from "../../constants/host.js"
import axios from 'axios';

const EditProfile = (props) => {
  const user =props.route.params.user;
  console.log(user);

  const [imgUrl, setImgUrl] = useState(user?.profileImage);
  const [statusVisible, SetstatusVisible] = useState({
    visibility: false,
    modaltype: 'failed',
  });

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(/^\d+$/, 'Phone number must be digits only')
      .length(10, 'Mobile number must be 10 digits')
      .required('phone number is required'),
  });

  const editImageHandler = async () => {
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

  //upload on Cloudinary

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

  const handleEdit = async (values) => {
    //handling edited value
    const profileEdit = {
      profileImage: imgUrl,
      name: values.name,
      email: values.email,
      mobileNo: values.phone,
    };
    console.log(profileEdit);

    //send edited values to backend
      const token = await AsyncStorage.getItem('token');
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      
     const response=  await axios.put(
          `${host.apiUrl}/api/user/update-profile`,
            profileEdit,
          config
        )
    
        if(response.data.updatedUser){
          SetstatusVisible({visibility: true, modaltype: 'success'});
        }
      }
      catch(err){
        console.log(err);
        SetstatusVisible({visibility: true, modaltype: 'failed'});
      }
  
  
  };

  const handleSuccess = () => {
    SetstatusVisible(prev => {
      return {visibility: false, modaltype: prev.modaltype};
    });
    props.navigation.navigate("Profile");
  };

  return (
    <View className="h-full">
      <View className="h-40" style={{backgroundColor: COLORS.primary}}>
        <HeadBack navigation={props.navigation} profile={true} title="Edit Profile" />
        <View className="flex items-center ">
          <TouchableOpacity onPress={editImageHandler}>
            {imgUrl ? (
              <Image
                source={{uri: imgUrl}}
                style={styles.image}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../../assets/user.png')}
                style={styles.image}
              />
            )}
            <View className="absolute right-0 bottom-0 bg-[#497320] p-[10] rounded-full  border-white border-[2.5px]">
              <UserIcon name="camera" size={17} color={'white'}></UserIcon>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="h-max m-8">
        <Formik
          initialValues={{
            email: user.email,
            phone: user.mobileNo,
            name: user.name,
          }}
          validationSchema={validationSchema}
          onSubmit={handleEdit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
          }) => (
            <View className="flex mt-16 ">
              <View className="mb-4">
                <Text style={styles.label}>Username :</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <Text className="text-red-500  mx-2">{errors.name}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text style={styles.label}>Email :</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text className="text-red-500 mt-1 mx-2">{errors.email}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text style={styles.label}>Phone Number :</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  keyboardType="numeric"
                />
                {errors.phone && touched.phone && (
                  <Text className="text-red-500 mt-1 mx-2">{errors.phone}</Text>
                )}
              </View>
              <View className="mt-16">
                <TouchableOpacity onPress={handleSubmit}>
                  <ButtonComp title="Update" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>

      <StatusModal
        modalType={statusVisible.modaltype}
        modalState={statusVisible.visibility}
        hideModal={handleSuccess}
        message={
          (statusVisible.modaltype === 'failed' && 'An Error Occured') ||
          (statusVisible.modaltype === 'success' &&
            'Profile edited successfully') ||
          (statusVisible.modaltype === 'loader' && 'Loaing image please wait...')
        }
        formData={user}></StatusModal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 'auto',
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#ddd',
    objectFit: 'cover',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 17,
    color: 'black',
  },
});

export default EditProfile;
