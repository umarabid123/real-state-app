import { View, Text } from 'react-native'
import React from 'react'

export default function AppText({ text, fontSize, color, fontWeight=400, style,subTextStyle, type,subText,onPress }: { text: any; fontSize?: number; color?: string; fontWeight?: number; style?: object; subTextStyle?:object; type?:string; subText?:string; onPress?: () => void }) {
    return (
        <Text onPress={onPress} style={[{ fontSize: fontSize, color: color, fontWeight: fontWeight }, style]}>

            {text} {type ==='subText' && <Text style={subTextStyle}>{subText}</Text>}
        </Text>
    )
}