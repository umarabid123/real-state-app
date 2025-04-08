import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'

const AppButton = ({text}:{text?:string}) => {
  return (
    <Pressable style={{ backgroundColor: Colors.primary, padding: 10, borderRadius: 10, width:190, paddingVertical:16}}>
        <AppText text={text} fontSize={16} color={"#fff"} fontWeight={700} style={{textAlign:'center'}} />
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({})