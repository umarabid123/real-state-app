import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'

const AuthFooter = () => {
    return (
        <View style={styles.footer}>
            <AppText text={"Don’t have an account?"} type='subText' subText='Register' subTextStyle={styles.registerText} style={styles.footerText} />
        </View>
    )
}

export default AuthFooter

const styles = StyleSheet.create({
    footer: {
        marginTop: 30,
    },
    footerText: {
        color: '#666',
    },
    registerText: {
        color: Colors.secondary,
        fontWeight: 'bold',
    },
})