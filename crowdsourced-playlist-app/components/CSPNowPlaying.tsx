import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify'
import { getParty } from '../src/graphql/queries'

import Icon from 'react-native-vector-icons/FontAwesome5'
import CSPButton from './CSPButton';

export default function CSPNowPlaying({ isHost = false, play, pause }) {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')

  useEffect(() => {

  }, [])

  if (isHost) {
    return (
      <View>
        <CSPButton onPress={play} title="Play" />
        <CSPButton onPress={pause} title="Pause" />
      </View>
    )
  }

  return (
    <View>
      <Icon name="music" size={30} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    width: 250,
    backgroundColor: '#004E89',
  },
  buttonText: {
    color: '#E5F4E3',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
  }
})
