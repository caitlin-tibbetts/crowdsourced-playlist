import React, {useState} from 'react';
import { Text } from 'react-native';
import CSPView from '../components/CSPView.tsx';
import { CSPStyles } from '../CSPStyles.tsx'
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";

export default function ViewPlaylist({navigation}) {
    return (
      <CSPView>
        <Text style={ CSPStyles.titleStyle }>Playlist page</Text>
      </CSPView>
    );
}
