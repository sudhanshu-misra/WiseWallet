import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

const OtpInput = props => {
  const textInput = useRef(null);
  const lengthInput = 6;
  const [internalVal, setInternalVal] = useState('');

  const onChangeText = val => {
    console.log(internalVal);
    setInternalVal(val);
    props.code(val);
    // onChangeOtp(val);
  };
  useEffect(() => {});
  return (
    <View style={styles.container} className="p-2">
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.containerAvoidingView}>
        <View>
          <TextInput
            onChangeText={onChangeText}
            style={{
              width: 300,
              height: 50,
              letterSpacing: 34,
            }}
            className="text-2xl font-bold"
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
            ref={input => (textInput.current = input)}
          />
          <View style={styles.containerInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.cellView,
                    {
                      borderBottomColor:
                        index === internalVal.length ? '#FB6C6A' : '#234DB7',
                    },
                  ]}>
                  <Text className="text-black text-4xl">●af</Text>
                  {/* <TextInput style={styles.cellText} /> */}
                  {/* <Text
                        style={styles.cellText}
                        onPress={() => textInput.focus()}>
                        {internalVal?.length > 0 ? internalVal[index] : 'adfadfsdf'}
                    </Text> */}
                </View>
              ))}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoidingView: {
    flex: 1,
    // alignItems: 'center',
    // padding: 10,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cellView: {
    // paddingVertical: 11,
    width: 40,
    margin: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderBottomWidth: 2,
  },
  cellText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default OtpInput;
