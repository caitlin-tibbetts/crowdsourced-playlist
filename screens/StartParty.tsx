import React, {useState} from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import CSPButton from '../components/CSPButton.tsx';
import CSPView from '../components/CSPView.tsx';
import { CSPStyles } from '../CSPStyles.tsx'
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';

export default function StartParty({navigation}) {
  //  var date = new Date().getDate();
  //  var hours = new Date().getHours();
  //  const parties = firestore().collection('parties');
  async function createParty() {
    const curPin = Math.floor(Math.random() * 1000000); //Fix this before production, allows for possible duplicates
  //    await parties.add({
  //      pin: curPin,
  //      title: partyName,
  //      date: date,
  //      hours: hours
  //    });
    try {
      console.log(partyName);
      AsyncStorage.setItem('partyPin', curPin).then(() => {
        navigation.navigate('Playlist');
      });
    } catch (error) {
      alert("There was a problem saving your party.");
    }
  }
  var curParty;
  AsyncStorage.getItem('partyPin').then(values => {
    curParty = values;
  });
  console.log(curParty);
  if (curParty == null) {
    return (
      <CSPView>
        <CSPButton title='Onward!' onPress={() => createParty()}/>
      </CSPView>
    );
  }
  return (
    <CSPView>
      <CSPButton title={ 'Continue with ' + partyPin } onPress={ () => navigation.navigate('Playlist') }/>
      <CSPButton title='Onward!' onPress={() => createParty()}/>
    </CSPView>
  );
}
