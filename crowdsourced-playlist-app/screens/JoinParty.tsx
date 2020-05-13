import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';

import CSPButton from '../components/CSPButton';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { CSPStyles } from '../CSPStyles'

import { API, graphqlOperation } from 'aws-amplify'
import { partiesByPin } from '../src/graphql/queries'
import { createAttendee } from '../src/graphql/mutations';
import ViewPlaylist from './ViewPlaylist';

export default function JoinParty({ navigation }) {
  const [code, setCode] = useState('')
  const [username, setUsername] = useState('')
  async function joinParty() {
    try {
      let res
      res = await API.graphql(graphqlOperation(partiesByPin, { pin: code }))
      if (res.data.partiesByPin.items.length == 0) {
        Alert.alert(
          "Error",
          "This party does not exist.",
          [
            { text: "OK", onPress: () => setCode('') }
          ],
          { cancelable: false })
        return false
      } else {
        const attendee = { screenName: username, partyID: res.data.partiesByPin.items[0].id }
        await API.graphql(graphqlOperation(createAttendee, { input: attendee }))
        return { pin: code, name: res.data.partiesByPin.items[0].name, partyID: res.data.partiesByPin.items[0].id, host: false }
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={CSPStyles.container}>
      <Text style={CSPStyles.titleStyle}>Input the pin for your party</Text>
      <View style={{ height: 20 }} />
      <View style={CSPStyles.promptBox}>
        <Text style={CSPStyles.promptStyle}>Your name: </Text>
        <TextInput style={CSPStyles.textInputStyle} value={username} onChangeText={text => setUsername(text)} />
      </View>
      <View style={{ height: 20 }} />
      <SmoothPinCodeInput
        cellStyle={{
          borderBottomWidth: 2,
          borderColor: 'white',
        }}
        cellStyleFocused={{
          borderColor: 'gray',
        }}
        value={code}
        onTextChange={code => { setCode(code) }}
      />
      <CSPButton title='Go!' onPress={() => joinParty().then(curParty => {
        if (curParty) {
          navigation.navigate('Playlist', curParty)
        }
      })} />
      <View style={CSPStyles.bottom}>
        <Text style={CSPStyles.textStyle}>Created by Caitlin Tibbetts (2020)</Text>
      </View>
    </View>
  );
}
