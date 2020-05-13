import React, { useState } from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import Home from "./screens/Home";
import JoinParty from "./screens/JoinParty";
import StartParty from "./screens/StartParty";
import ViewPlaylist from "./screens/ViewPlaylist";

const getFonts = () => Font.loadAsync({
  'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'montserrat-semibolditalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf')
})

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
          <Stack.Screen name="Start" component={StartParty} options={{ title: 'Start a Party' }} />
          <Stack.Screen name="Join" component={JoinParty} options={{ title: 'Join a party' }} />
          <Stack.Screen name="Playlist" component={ViewPlaylist} options={{ title: 'View the Playlist' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
