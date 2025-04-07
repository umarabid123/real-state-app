import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../styles/globalStyle'
import AppText from '../../components/AppText/AppText'
import { Colors } from '../../contexts/theme'
import AppButton from '../../components/AppButton/AppButton'

const OnBoardingScreen = () => {
  return (
    <ImageBackground source={require('../../assets/images/bg-img.png')} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
      <View style={[globalStyle.container, { backgroundColor: "rgba(33, 98, 138, 0.5)", justifyContent: 'space-between', paddingBottom: 23 }]}>
        <View />
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/images/logo.png')} resizeMode='contain' />
          <AppText text='Rise        
        Real Estate' color={Colors.white} fontWeight={700} fontSize={36} style={{ width: 190, textAlign: 'center', marginHorizontal: "auto" }} />
        </View>

        <View style={{ marginTop: 192 }}>
          <AppButton text="let's start" />
          <AppText text={"Made with love"} style={{ textAlign: "center", marginTop: 25 }} fontSize={10} color={Colors.lightGray} />
          <AppText text={"v.1.0"} style={{ textAlign: "center" }} fontSize={10} fontWeight={700} color={Colors.lightGray} />
        </View>
      </View>
    </ImageBackground>            
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})