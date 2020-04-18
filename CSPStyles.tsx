import { StyleSheet } from 'react-native'

const CSPStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D326D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0
  },
  textStyle: {
    color: '#E5F4E3',
    fontFamily: 'montserrat-regular',
  },
  titleStyle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#E5F4E3',
    fontFamily: 'montserrat-regular',
  },
  promptStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#E5F4E3',
    fontFamily: 'montserrat-regular',
  },
  promptBox: {
    flexDirection: 'row'
  },
  textInputStyle: {
    width: 150,
    height: 30,
    borderColor: '#E5F4E3',
    borderWidth: 1,
    marginLeft: 10
  }
})

export { CSPStyles }
