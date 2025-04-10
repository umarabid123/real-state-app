import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../AppButton/AppButton'
import { Colors } from '../../contexts/theme'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation<any>()
  return (
    <View style={{alignSelf:'flex-start'}}>
      <AppButton type='notText' source={require('../../assets/images/left-arrow.png')} containerStyle={styles.iconContainer} onPress={() => navigation.goBack() } />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({iconContainer:{
    backgroundColor:Colors.softGray,
    width:50,
    height:50,
    borderRadius:50,
}})