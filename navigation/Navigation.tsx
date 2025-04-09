import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import OnBoardingScreen from '../screens/onBoardingScreens/OnBoardingScreen';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
