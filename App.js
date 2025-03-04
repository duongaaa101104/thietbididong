import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import OnboardingScreen from './OnboardingScreen';
import SignInScreen from './SignInScreen';
import PhoneNumberScreen from './PhoneNumberScreen';
import VerificationScreen from './VerificationScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}