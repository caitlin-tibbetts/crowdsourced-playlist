import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CSPButton from '../components/CSPButton.tsx';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { CSPStyles } from '../CSPStyles.tsx'

export default function JoinParty({navigation}) {
  const [ code, setCode ] = React.useState('')
  async function joinParty() {

  }
  return (
    <View style={CSPStyles.container}>
      <Text style={CSPStyles.titleStyle}>Input the pin for your party</Text>
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
      <CSPButton title='Go!' onPress={() => joinParty()}/>
      <View style={CSPStyles.bottom}>
        <Text style={CSPStyles.textStyle}>Created by Caitlin Tibbetts (2020)</Text>
      </View>
    </View>
  );
}
