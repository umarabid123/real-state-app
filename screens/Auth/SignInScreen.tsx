import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  const images = [require("../../assets/images/login-img.png"), require("../../assets/images/login-img.png"), require("../../assets/images/login-img-2.png"), require("../../assets/images/login-img.png")]
  return (
    <View>
      <View style={{flexDirection:'row', flexWrap:'wrap',gap:8}}>
      {images.map((item, i) => {
        return (
          <Image source={item} key={i} />
        )
      })}
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})