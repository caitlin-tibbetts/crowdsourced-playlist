import React, { useState } from 'react';
import { Text } from 'react-native';
import CSPView from '../components/CSPView';
import { CSPStyles } from '../CSPStyles'
import {
  NavigationScreenComponent,
} from "react-navigation";


import { API, graphqlOperation } from 'aws-amplify'
import { partiesByPin } from '../src/graphql/queries'

export default function ViewPlaylist({ route, navigation }) {
  const { pin } = route.params
  const { name } = route.params
  const { partyID } = route.params

  function getFourDigitPin() {
    if(pin.toString().length() == 3) {
      return "0".concat(pin.toString())
    }
    if(pin.toString().length() == 2) {
      return "00".concat(pin.toString())
    }
    if(pin.toString().length() == 1) {
      return "000".concat(pin.toString())
    }
  }

  let newPin
  if(pin.toString().length() < 4){
    newPin = getFourDigitPin()
  }
  newPin = pin

  return (
    <CSPView>
      <Text style={CSPStyles.titleStyle}>Playlist page</Text>
      <Text style={CSPStyles.textStyle}>{newPin}</Text>
      <Text style={CSPStyles.textStyle}>{name}</Text>
      <Text style={CSPStyles.textStyle}>{partyID}</Text>
    </CSPView>
  );
}
