import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CSPSmallButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress = {onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ title }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginStart:10,
    width: 50,
    backgroundColor: '#004E89',
  },
  buttonText: {
    color: '#E5F4E3',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
  }
})
