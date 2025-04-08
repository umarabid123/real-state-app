import { View, Text } from 'react-native'
import React from 'react'

export default function AppText({ text, fontSize, color, fontWeight=400, style }: { text: any; fontSize?: number; color?: string; fontWeight?: number; style?: object }) {
    return (
        <Text style={[{ fontSize: fontSize, color: color, fontWeight: fontWeight }, style]}>

            {text}
        </Text>
    )
}