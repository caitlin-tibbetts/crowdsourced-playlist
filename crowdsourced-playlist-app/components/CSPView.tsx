import React from 'react';
import { Text, View } from 'react-native';
import { CSPStyles } from '../CSPStyles.tsx'

export default function CSPView(props) {
  return (
    <View style={CSPStyles.container}>
      { props.children }
      <View style={CSPStyles.bottom}>
        <Text style={CSPStyles.textStyle}>Created by Caitlin Tibbetts (2020)</Text>
      </View>
    </View>
  )
}
