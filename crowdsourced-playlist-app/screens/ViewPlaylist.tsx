import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, TextInput, AsyncStorage } from 'react-native'
import axios from 'axios';
import CSPView from '../components/CSPView'
import { CSPStyles } from '../CSPStyles'


import { API, graphqlOperation } from 'aws-amplify'
import { getParty, getSong } from '../src/graphql/queries'
import CSPPlaylistItem from '../components/CSPPlaylistItem'
import { createSong, updateSong } from '../src/graphql/mutations'
import { onCreateSong, onUpdateSong, onDeleteSong } from '../src/graphql/subscriptions'
import CSPSmallButton from '../components/CSPSmallButton'

import SpotifyWebAPI from 'spotify-web-api-js'
import CSPNowPlaying from '../components/CSPNowPlaying'

export default function ViewPlaylist({ route, navigation }) {
  const { pin } = route.params
  const { name } = route.params
  const { partyID } = route.params
  const { isHost } = route.params

  const [playlist, setPlaylist] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [addedSong, setAddedSong] = useState('')

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

  var sp = new SpotifyWebAPI()
  var accessToken
  AsyncStorage.getItem('accessToken').then(nextAccessToken => {
    accessToken = nextAccessToken
  })

  async function getPlaylist() {
    const party: any = await API.graphql(graphqlOperation(getParty, { id: partyID }))
    return party.data.getParty.songs.items
  }

  async function changeSong(songID, newSong) {
    const song = {
      id: songID,
      uri: newSong.tracks.items[0].uri,
      title: newSong.tracks.items[0].name,
      artist: newSong.tracks.items[0].artists[0].name,
      album: newSong.tracks.items[0].album.name
    }
    await API.graphql(graphqlOperation(updateSong, { input: song }))
  }

  useEffect(() => {
    const createSongSubscription = (API.graphql(graphqlOperation(onCreateSong)) as any).subscribe({
      next: newSong => {
        if (newSong.value.data.onCreateSong.partyID == partyID) {
          if (isHost) {
            sp.setAccessToken(accessToken)
            sp.searchTracks(newSong.value.data.onCreateSong.title, { limit: 1 }).then(songs => {
              changeSong(newSong.value.data.onCreateSong.id, songs).then().catch(err => console.log(err))
            }).catch(err => {
              console.log(err)
            })
          }
        }
      },
      error: console.warn()
    })
    const updateSongSubscription = (API.graphql(graphqlOperation(onUpdateSong)) as any).subscribe({
      next: updatedSong => {
        if (updatedSong.value.data.onUpdateSong.partyID == partyID) {
          setPlaylist([...playlist, updatedSong.value.data.onUpdateSong])
          if(isHost) {
            sp.setAccessToken(accessToken)
            fetch(`https://api.spotify.com/v1/me/player/queue?uri=${updatedSong.value.data.onUpdateSong.uri}&device_id=68784c081e2bff799b22885e10e760b018431b55`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }).then(res => {
              console.log(res.status)
            })
          }
        }
      },
      error: console.warn()
    })
    const deleteSongSubscription = (API.graphql(graphqlOperation(onDeleteSong)) as any).subscribe({
      next: deletedSong => {
        playlist.forEach((value, index) => {
          if (value.id == deletedSong.value.data.onDeleteSong.id) {
            playlist.splice(index, 1)
          }
        })
      }
    })
    getPlaylist().then(songs => {
      setPlaylist(songs)
    })
    return () => {
      createSongSubscription.unsubscribe()
      updateSongSubscription.unsubscribe()
      deleteSongSubscription.unsubscribe()
    }
  }, [])

  async function addSong() {
    const song = { title: addedSong, artist: '', album: '', partyID: partyID }
    await API.graphql(graphqlOperation(createSong, { input: song }))
  }

  async function playSpotify() {
    await sp.setAccessToken(accessToken)
    await sp.play()
  }

  async function pauseSpotify() {
    await sp.setAccessToken(accessToken)
    await sp.pause()
  }

  return (
    <CSPView>
      <Text style={CSPStyles.titleStyle}>{newPin}</Text>
      <Text style={CSPStyles.textStyle}>{name}</Text>
      <CSPNowPlaying
        isHost={isHost}
        play={() => {
          playSpotify()
        }}
        pause={() => {
          pauseSpotify()
        }}
      />
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
