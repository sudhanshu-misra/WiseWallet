import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';


const UserProfile = ({user}) => {
  return (
    <View className="flex mt-16">
      <Text style={styles.label}>Username :</Text>
      <TextInput
        style={styles.textInput}
        value={user.username}
        editable={false}
      />
      <Text style={styles.label}>Email :</Text>
      <TextInput style={styles.textInput} value={user.email} editable={false} />
      <Text style={styles.label}>Phone Number :</Text>
      <TextInput style={styles.textInput} value={user.mobileNumber} editable={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 15,
    fontSize:17,
    color:"black"
  },
});

export default UserProfile;
