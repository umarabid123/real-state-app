import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../styles/globalStyle'
import TopText from '../../components/TopText/TopText'
import Header from '../../components/Header/Header'
import CustomTextInput from '../../components/TextInput/TextInput'
import AppText from '../../components/AppText/AppText'
import { Colors } from '../../contexts/theme'
import AppButton from '../../components/AppButton/AppButton'
import DividerOr from '../../components/DividerOr/DividerOr'
import SocialLogin from '../../components/SocialLogin/SocialLogin'
import AuthFooter from '../../components/AuthFooter/AuthFooter'

const SignInForm = () => {
  return (
    <View style={[globalStyle.container, { justifyContent: 'flex-start', paddingTop: 24, alignItems: 'flex-start' }]}>
      <Header />
      <TopText styles={{ marginTop: 50 }} />
      <View style={{ marginTop: 50, gap: 15, alignItems: 'center' }}>
        <CustomTextInput source={require('../../assets/images/primary-mail-icon.png')} placeholder='Email' />
        <CustomTextInput source={require('../../assets/images/password.png')} placeholder='Email' />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <AppText text={"Forgot password?"} color={Colors.secondary} fontSize={12} fontWeight={600} />
          <AppText text={"Show Password"} color={Colors.secondary} fontSize={12} fontWeight={600} />
        </View>
        <AppButton text='Login' containerStyle={{ backgroundColor: Colors.primary, width: 278, marginHorizontal: 'auto', marginTop: 50 }} />

        <DividerOr />

        <SocialLogin />

        <AuthFooter />
      </View>
    </View>
  )
}

export default SignInForm

const styles = StyleSheet.create({})