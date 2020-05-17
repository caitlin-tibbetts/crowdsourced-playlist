import React from 'react';
import { Text, View } from 'react-native';
import { CSPStyles } from '../CSPStyles'

export default function CSPView(props) {
  return (
    <View style={CSPStyles.container}>
      { props.children }
    </View>
  )
}
