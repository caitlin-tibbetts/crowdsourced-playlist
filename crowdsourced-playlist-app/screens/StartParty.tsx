import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Alert, AsyncStorage } from 'react-native';
import CSPButton from '../components/CSPButton';
import CSPView from '../components/CSPView';
import { CSPStyles } from '../CSPStyles'

import { encode as btoa } from 'base-64';
import { AuthSession } from 'expo';

import { API, graphqlOperation } from 'aws-amplify'

import { createParty } from '../src/graphql/mutations'
import { partiesByPin } from '../src/graphql/queries'

import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from 'react-native-dotenv';

const scopes = ['user-modify-playback-state', 'user-read-currently-playing', 'user-read-playback-state', 'user-library-modify',
  'user-library-read', 'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public',
  'playlist-modify-private', 'user-read-recently-played', 'user-top-read'].join(' ');

const getAuthorizationCode = async () => {
  AuthSession.startAsync({
    authUrl:
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      CLIENT_ID +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(REDIRECT_URL),
  }).then(res => {
    console.log(res)
    return res.params.code
  }).catch(err => {
    console.error(err)
  });
}

const getTokens = async () => {
  try {
    const authorizationCode = await getAuthorizationCode() //we wrote this function above
    const credsB64 = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        REDIRECT_URL
        }`,
    });
    const responseJson = await response.json();
    // destructure the response and rename the properties to be in camelCase to satisfy my linter ;)
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn,
    } = responseJson;

    const expirationTime = new Date().getTime() + expiresIn * 1000;
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    await AsyncStorage.setItem('expirationTime', expirationTime.toString());
  } catch (err) {
    console.error(err);
  }
}

const refreshTokens = async () => {
  try {
    const credsB64 = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });
    const responseJson = await response.json();
    if (responseJson.error) {
      await getTokens();
    } else {
      const {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        expires_in: expiresIn,
      } = responseJson;

      const expirationTime = new Date().getTime() + expiresIn * 1000;
      await AsyncStorage.setItem('accessToken', newAccessToken);
      if (newRefreshToken) {
        await AsyncStorage.setItem('refreshToken', newRefreshToken);
      }
      await AsyncStorage.setItem('expirationTime', expirationTime.toString());
    }
  } catch (err) {
    console.error(err)
  }
}

export default function StartParty({ navigation }) {
  const [accessTokenAvailable, setAccessTokenAvailable] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('expirationTime').then(tokenExpirationTime => {
      if (!tokenExpirationTime || new Date().getTime() > parseInt(tokenExpirationTime)) {
        refreshTokens().then()
        setAccessTokenAvailable(true)
      } else {
        setAccessTokenAvailable(true)
      }
    }).catch(err => {
      console.error(err)
    });
  }, [])

  async function getNextPin() {
    try {
      let res;
      let nextPin;
      do {
        nextPin = Math.floor(Math.random() * 10000) + 1  
        res = await API.graphql(graphqlOperation(partiesByPin, { pin: nextPin }))
      } while(res.data.partiesByPin.items.length != 0)
      return nextPin
    } catch (err) {
      console.log('error getting nextPin: ', err)
    }
  }

  async function startParty() {
    try {
      const nextPin = await getNextPin()
      const party = { pin:  nextPin, name: name }
      await API.graphql(graphqlOperation(createParty, { input: party }))
      return nextPin
    } catch (err) {
      console.log('error creating party: ', err)
    }
  }

  return (
    <CSPView>
      <Text style={CSPStyles.titleStyle}>{accessTokenAvailable ? "" : "Spotify could not authenticate."}</Text>
      <View style={CSPStyles.promptBox}>
        <Text style={CSPStyles.promptStyle}>Party name: </Text>
        <TextInput style={CSPStyles.textInputStyle} value={name} onChangeText={text => setName(text)}/>
      </View>
      <CSPButton title='Onward!' onPress={() => startParty().then(curPin => navigation.navigate('Playlist', {pin: curPin}))} />
    </CSPView>
  );
}
