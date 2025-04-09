import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppText from '../../components/AppText/AppText'
import { Colors } from '../../contexts/theme'
import { globalStyle } from '../../styles/globalStyle'
import AppButton from '../../components/AppButton/AppButton'

const SignInScreen = () => {
  const images = [require("../../assets/images/login-img.png"), require("../../assets/images/login-img.png"), require("../../assets/images/login-img-2.png"), require("../../assets/images/login-img.png")]
  return (
    <View style={[globalStyle.container, { alignItems: 'flex-start' }]}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {images.map((item, i) => {
          return (
            <Image source={item} key={i} />
          )
        })}
      </View>
      <AppText text={'Ready to'} fontSize={25} fontWeight={400} color={Colors.secondary} style={{ marginTop: 53, }} type='subText' subText='explore?' subTextStyle={{ fontWeight: 800 }} />
      <AppButton iconStyle={{width:20}} text='Hello' type='icon' source={require('../../assets/images/mail-icon.png')} containerStyle={{flexDirection:'row', gap:6, width:278, marginHorizontal:'auto'}} />
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})