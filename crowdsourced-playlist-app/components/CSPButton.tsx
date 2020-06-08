import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CSPButton({ title, onPress, disabled=false }) {
  return (
    <TouchableOpacity onPress = {onPress} disabled={disabled ? true : false}>
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
