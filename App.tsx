import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './components/AppText/AppText'
import { globalStyle } from './styles/globalStyle'

const App = () => {
  return (
    <View style={globalStyle.container}>
      <AppText text='Hello World!' fontSize={20} color='blue' fontWeight='bold' />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

})