import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import TopText from '../../components/TopText/TopText'
import { globalStyle } from '../../styles/globalStyle'
import { Colors } from '../../contexts/theme'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


const OtpScreen = () => {
  const [otp, setOtp] = React.useState('')
  return (
    <View style={[globalStyle.container, {alignItems:'flex-start',justifyContent:'flex-start', paddingTop:24}]}>
       <Header />
       <TopText titleText={"Enter the"} description={"Enter the 4 digit code that we just sent to"} titleSubText={"code"} subDescription={"\njonathan@email.com"} subTextStyle={{color:Colors.mediumGray, fontWeight:600}} styles={styles.topText} type={"subText"} />

       <SmoothPinCodeInput
        value={otp}
        onTextChange={setOtp}      
        onBackspace={() => console.log('No more back.')}
        animated={false}
        cellStyle={{borderWidth:1, borderColor:"#C9C9C9", borderRadius:10}}
        cellStyleFocused={{borderColor:Colors.primary, placeholderColor:'#949494'}}   
      />
       <AuthFooter text={"Didn’t receive the OTP?"} subText={"Resend OTP"}  />       
    </View>
  )    
}
               
export default OtpScreen                       
             
const styles = StyleSheet.create({ topText: {
  marginTop: 50,                                                                                                                                        
},})                                                                                                                 




