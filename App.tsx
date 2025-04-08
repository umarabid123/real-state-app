import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './components/AppText/AppText'
import { globalStyle } from './styles/globalStyle'
import { Colors } from './contexts/theme'
import OnBoardingScreen from './screens/onBoardingScreens/OnBoardingScreen'

const App = () => {
  return (
    <OnBoardingScreen />
  )
}

export default App

const styles = StyleSheet.create({

})