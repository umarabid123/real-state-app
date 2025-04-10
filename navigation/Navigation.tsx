import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import OnBoardingScreen from '../screens/onBoardingScreens/OnBoardingScreen';
import SignInScreen from '../screens/Auth/SignInOption';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name='OnBoarding' options={{headerShown:false}} component={OnBoardingScreen} />
        <Stack.Screen name='SignIn' options={{headerShown:false}} component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
