import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'

interface AppButtonProps {
  text?: string;
  type?: string;
  source?: any;
  iconStyle?:object;
  containerStyle?:object
}

const AppButton: React.FC<AppButtonProps> = ({ text, type, source,iconStyle,containerStyle }) => {
  return (
    <Pressable style={[styles.button, containerStyle]}>
      {type === 'icon' && <Image source={source} style={iconStyle} />}
      <AppText text={text} fontSize={16} color="#fff" fontWeight={700} />
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 10,
    width: 190,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
