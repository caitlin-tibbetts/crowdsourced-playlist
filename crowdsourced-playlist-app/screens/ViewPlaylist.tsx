import React, {useState} from 'react';
import { Text } from 'react-native';
import CSPView from '../components/CSPView';
import { CSPStyles } from '../CSPStyles'
import {
  NavigationScreenComponent,
} from "react-navigation";

export default function ViewPlaylist({route, navigation}) {
    const { pin } = route.params
    return (
      <CSPView>
        <Text style={ CSPStyles.titleStyle }>Playlist page</Text>
        <Text style= {CSPStyles.textStyle }>{pin}</Text>
      </CSPView>
    );
}
