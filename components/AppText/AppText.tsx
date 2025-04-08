import { View, Text } from 'react-native'
import React from 'react'

export default function AppText({ text, fontSize, color, fontWeight, style }: { text: string; fontSize: number; color: string; fontWeight: string; style?: object }) {
    return (
        <Text style={[{ fontSize: fontSize, color: color, fontWeight: fontWeight }, style]}>

            {text}
        </Text>
    )
}