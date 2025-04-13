import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../../styles/globalStyle'
import TopText from '../../components/TopText/TopText'
import Header from '../../components/Header/Header'
import CustomTextInput from '../../components/TextInput/TextInput'
import AppText from '../../components/AppText/AppText'
import { Colors } from '../../contexts/theme'
import AppButton from '../../components/AppButton/AppButton'
import DividerOr from '../../components/DividerOr/DividerOr'
import SocialLogin from '../../components/SocialLogin/SocialLogin'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import { useNavigation } from '@react-navigation/native'

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)
   const navigation = useNavigation<any>()
  return (
    <View style={[globalStyle.container, styles.mainContainer]}>
      <Header />
      <TopText titleText={"Let’s"} titleSubText={"Sign In"} description={"quis nostrud exercitation ullamco laboris nisi ut"} styles={styles.topText} />
      <View style={styles.formContainer}>
        <CustomTextInput
          source={require('../../assets/images/primary-mail-icon.png')}
          placeholder='Email'
        />
        <CustomTextInput
          source={require('../../assets/images/password.png')}
          placeholder='Password'
          secureTextEntry={!showPassword}
        />    

        <View style={styles.rowBetween}>
          <AppText text="Forgot password?" onPress={() => navigation.navigate('OtpScreen')} color={Colors.secondary} fontSize={12} fontWeight={600} />
          <AppText
            onPress={() => setShowPassword(!showPassword)}
            text={showPassword ? 'Hide Password' : 'Show Password'}
            color={Colors.secondary}    
            fontSize={12}
            fontWeight={600}    
          />       
        </View>

        <AppButton     
          text='Login'                
          containerStyle={styles.loginButton}
        />

        <DividerOr />
        <SocialLogin />
        <AuthFooter route2='SignUp' text={"Don’t have an account?"} subText={'Register'} />
      </View>
    </View>
  )
}

export default SignInForm

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-start',
    paddingTop: 24,
    alignItems: 'flex-start',
  },
  topText: {
    marginTop: 50,
  },
  formContainer: {
    marginTop: 50,
    gap: 15,
    alignItems: 'center',
    width: '100%',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    width: 278,
    marginTop: 50,
    alignSelf: 'center',
  },
})
