import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CSPButton from '../components/CSPButton.tsx';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { CSPStyles } from '../CSPStyles.tsx'
import {AuthSession} from 'expo'

export default function Home({navigation}) {
  return (
    <View style={CSPStyles.container}>
      <Text style={CSPStyles.titleStyle}>Crowdsourced Playlist</Text>
      <CSPButton title='Start a party' onPress={() => navigation.navigate('Start')}/>
      <CSPButton title='Join a party' onPress={() => navigation.navigate('Join')}/>
      <View style={CSPStyles.bottom}>
        <Text style={CSPStyles.textStyle}>Created by Caitlin Tibbetts (2020)</Text>
      </View>
    </View>
  );

}
