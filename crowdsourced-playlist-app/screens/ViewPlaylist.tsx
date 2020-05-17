import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Button } from 'react-native';
import CSPView from '../components/CSPView';
import { CSPStyles } from '../CSPStyles'


import { API, graphqlOperation } from 'aws-amplify'
import { listSongs, getParty } from '../src/graphql/queries'
import CSPPlaylistItem from '../components/CSPPlaylistItem';

import { AppLoading } from 'expo';
import { createSong, updateSong } from '../src/graphql/mutations';
import { onCreateSong, onUpdateSong } from '../src/graphql/subscriptions';
import { TextInput } from 'react-native-gesture-handler';
import CSPButton from '../components/CSPButton';
import CSPSmallButton from '../components/CSPSmallButton';

export default function ViewPlaylist({ route, navigation }) {
  const { pin } = route.params
  const { name } = route.params
  const { partyID } = route.params
  const { host } = route.params

  const [playlist, setPlaylist] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [addedSong, setAddedSong] = useState('');

  function getFourDigitPin() {
    if (pin.toString().length == 4) {
      return pin
    }
    if (pin.toString().length == 3) {
      return "0".concat(pin.toString())
    }
    if (pin.toString().length == 2) {
      return "00".concat(pin.toString())
    }
    if (pin.toString().length == 1) {
      return "000".concat(pin.toString())
    }
  }
  let newPin;
  newPin = getFourDigitPin()

  async function getPlaylist() {
    const party = await API.graphql(graphqlOperation(getParty, { id: partyID }))
    return party.data.getParty.songs.items
  }

  const createSubscription = API.graphql(graphqlOperation(onCreateSong)).subscribe({
    next: newSong => {
      if (newSong.value.data.onCreateSong.partyID == partyID) {
        setPlaylist([...playlist, newSong.value.data.onCreateSong])
      }
    },
    error: console.warn()
  })


  const updateSubscription = API.graphql(graphqlOperation(onUpdateSong)).subscribe({
    next: updatedSong => {
      playlist.forEach((value, index) => {
        if (value.id == updatedSong.value.data.onUpdateSong.id) {
          playlist[index] = updatedSong.value.data.onUpdateSong
        }
      })
    },
    error: console.warn()
  })

  useEffect(() => {
    getPlaylist().then(songs => {
      setPlaylist(songs)
    })
    return () => {
      createSubscription.unsubscribe()
      updateSubscription.unsubscribe()
    }
  }, [])

  async function addSong() {
    const song = { title: addedSong, artist: "me", album: "someAlbum", partyID: partyID }
    await API.graphql(graphqlOperation(createSong, { input: song }))
  }

  return (
    <CSPView>
      <Text style={CSPStyles.titleStyle}>{newPin}</Text>
      <Text style={CSPStyles.textStyle}>{name}</Text>
      <FlatList
        onRefresh={() => {
          setRefreshing(true)
          getPlaylist().then(songs => {
            setPlaylist(songs)
            setRefreshing(false)
          })
        }}
        refreshing={refreshing}
        data={playlist}
        renderItem={({ item }) => (
          <CSPPlaylistItem
            songID={item.id}
            title={item.title}
            artist={item.artist}
            initialUpvotes={item.upvotes ? item.upvotes : 0}
            initialDownvotes={item.downvotes ? item.downvotes : 0} />
        )}
      />
      <View style={CSPStyles.promptBox}>
        <Text style={CSPStyles.promptStyle}>Add a song:</Text>
        <TextInput style={CSPStyles.textInputStyle} value={addedSong} onChangeText={value => { setAddedSong(value) }} />
        <CSPSmallButton title="Go!" onPress={() => {
          addSong().then(() => { setAddedSong("") })
        }} />
      </View>
    </CSPView>
  );


}
