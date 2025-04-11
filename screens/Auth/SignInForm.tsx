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
      <TopText styles={{ marginTop: 50 }} />
      <View style={{ marginTop: 50, gap: 15 }}>
        <CustomTextInput source={require('../../assets/images/primary-mail-icon.png')} placeholder='Email' />
        <CustomTextInput source={require('../../assets/images/password.png')} placeholder='Email' />
        
      </View>
    </View>
  )
}

export default SignInForm

const styles = StyleSheet.create({})