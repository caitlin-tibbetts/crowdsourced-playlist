import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import CSPButton from './components/CSPButton.tsx';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default function JoinParty({navigation}) {
  const [ code, setCode ] = React.useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Input the pin for your party</Text>
      <SmoothPinCodeInput
        cellStyle={{
          borderBottomWidth: 2,
          borderColor: 'white',
        }}
        cellStyleFocused={{
          borderColor: 'gray',
        }}
        value={code}
        onTextChange={code => {setCode(code)}}
      />
      <View style={styles.bottom}>
        <Text style={styles.textStyle}>Created by Caitlin Tibbetts (2020)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D326D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0
  },
  textStyle: {
    color: '#E5F4E3',
    fontFamily: 'montserrat-regular',
  },
  titleStyle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#E5F4E3',
    fontFamily: 'montserrat-regular',
  }
});
