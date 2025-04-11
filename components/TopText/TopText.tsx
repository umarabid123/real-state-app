import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'

const TopText = ({styles}:{styles?:object;}) => {
  return (
    <View style={styles}>
      <AppText text={"Let’s"} style={{marginBottom:20}} type='subText' subText='Sign In' fontSize={25} fontWeight={500} subTextStyle={{fontWeight:800}} color={Colors.secondary}/>
      <AppText text={"quis nostrud exercitation ullamco laboris nisi ut"}
      fontSize={12} color={Colors.mediumGray} />
    </View>
  )
}

export default TopText

const styles = StyleSheet.create({})