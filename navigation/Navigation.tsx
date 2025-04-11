import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import OnBoardingScreen from '../screens/onBoardingScreens/OnBoardingScreen';
import SignInScreen from '../screens/Auth/SignInOption';
import SignInForm from '../screens/Auth/SignInForm';
import SignUpScreen from '../screens/Auth/SignUpScreen';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name='OnBoarding' options={{headerShown:false}} component={OnBoardingScreen} />
        <Stack.Screen name='SignIn' options={{headerShown:false}} component={SignInScreen} />
        <Stack.Screen name='SignInForm' options={{headerShown:false}} component={SignInForm} />
        <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
