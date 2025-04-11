import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../styles/globalStyle'
import TopText from '../../components/TopText/TopText'
import Header from '../../components/Header/Header'
import CustomTextInput from '../../components/TextInput/TextInput'

const SignInForm = () => {
  return (
    <View style={[globalStyle.container, { justifyContent: 'flex-start', paddingTop: 24, alignItems: 'flex-start' }]}>
      <Header />
      <TopText styles={{marginTop:50}} />
      <CustomTextInput />
    </View>
  )
}

export default SignInForm

const styles = StyleSheet.create({})