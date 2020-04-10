import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CSPButton from '../components/CSPButton.tsx';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";

export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Crowdsourced Playlist</Text>
      <CSPButton title='Start a party' onPress={() => navigation.navigate('Start')}/>
      <CSPButton title='Join a party' onPress={() => navigation.navigate('Join')}/>
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
