import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import OnBoardingScreen from '../screens/onBoardingScreens/OnBoardingScreen';
import SignInScreen from '../screens/Auth/SignInOption';
import SignInForm from '../screens/Auth/SignInForm';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import OtpScreen from '../screens/Auth/OtpScreen';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name='OnBoarding' options={{headerShown:false}} component={OnBoardingScreen} />
        <Stack.Screen name='SignIn' options={{headerShown:false}} component={SignInScreen} />
        <Stack.Screen name='SignInForm' options={{headerShown:false}} component={SignInForm} />
        <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUpScreen} />
        <Stack.Screen name='OtpScreen' options={{headerShown:false}} component={OtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

