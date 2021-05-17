import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { OverallContextProvider } from "./store";

import SendBtc from './src/screens/SendBtc';
import ScanCode from './src/screens/ScanCode';

import { ReemKufi_400Regular, useFonts, } from '@expo-google-fonts/reem-kufi';
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  
} from '@expo-google-fonts/montserrat';


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    ReemKufi_400Regular,
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    'Graphik-Medium': require('./assets/fonts/Graphik-Medium.ttf'),
    'Graphik-Black': require('./assets/fonts/Graphik-Black.ttf'),
    'Graphik-Bold': require('./assets/fonts/Graphik-Bold.ttf'),
    'Graphik-Regular': require('./assets/fonts/Graphik-Regular.ttf'),
    'Graphik-Semibold': require('./assets/fonts/Graphik-Semibold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <OverallContextProvider>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="SendBtc" component={SendBtc}/>
          <Stack.Screen name="ScanCode" component={ScanCode}/>
        </Stack.Navigator>
      </NavigationContainer>
    </OverallContextProvider>
  );
  
}
