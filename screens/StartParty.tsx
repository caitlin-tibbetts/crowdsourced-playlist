import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Alert, AsyncStorage } from 'react-native';
import CSPButton from '../components/CSPButton.tsx';
import CSPView from '../components/CSPView.tsx';
import { CSPStyles } from '../CSPStyles.tsx'
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";

import { encode as btoa } from 'base-64';
import { AuthSession } from 'expo';
import { spotifyCredentials } from '../secrets/SpotifyCredentials.tsx';
import axios from 'axios';
//import AsyncStorage from '@react-native-community/async-storage';

const scopes = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'].join(' ');

const getSpotifyCredentials = async () => {
  const res = await axios.get(spotifyCredentials.Api);
  return res.data;
}

const getAuthorizationCode = async () => {
  try {
    const credentials = await getSpotifyCredentials();
    const result = await AuthSession.startAsync({
      authUrl:
        'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        credentials.clientID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(credentials.redirectURL),
    })
    return result.params.code
  } catch (err) {
    console.error(err)
  }
}

const getTokens = async () => {
  try {
    const credentials = await getSpotifyCredentials();
    const authorizationCode = await getAuthorizationCode() //we wrote this function above
    const credsB64 = btoa(`${credentials.clientID}:${credentials.clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        credentials.redirectURL
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
    const credentials = await getSpotifyCredentials();
    const credsB64 = btoa(`${credentials.clientID}:${credentials.clientSecret}`);
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

export default function StartParty({navigation}) {
  const [accessTokenAvailable, setAccessTokenAvailable] = useState(false);
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

  useEffect(() => {
    const checkAuth = async () => {
      const tokenExpirationTime = await AsyncStorage.getItem('expirationTime');
      if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
        await refreshTokens();
      } else {
        setAccessTokenAvailable(true);
      }
    }
    checkAuth();
  }, [])

  var curParty;
  AsyncStorage.getItem('partyPin').then(values => {
    curParty = values;
  });

  if (curParty == null) {
    return (
      <CSPView>
        <Text style={CSPStyles.titleStyle}>{accessTokenAvailable ? "Spotify is authenticated.": "Spotify could not authenticate."}</Text>
        <CSPButton title='Onward!' onPress={() => createParty()}/>
      </CSPView>
    );
  }
  return (
    <CSPView>
      <CSPButton title={ 'Continue with ' + partyPin } onPress={ () => navigation.navigate('Playlist') }/>
      <Text style={CSPStyles.titleStyle}>{accessTokenAvailable ? "Spotify is authenticated.": "Spotify could not authenticate."}</Text>
      <CSPButton title='Onward!' onPress={() => createParty()}/>
    </CSPView>
  );
}
