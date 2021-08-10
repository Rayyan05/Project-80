import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import SpacecraftScreen from './screens/SpacecraftScreen';
import DailypicScreen from './screens/Daily';
import StarMapScreen from './screens/StarMapScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Daily from './screens/Daily';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "HomeScreen" screenOptions = {{headerShown:false}}>
    <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
    <Stack.Screen name = "Daily" component={Daily}/>
    <Stack.Screen name = "StarMapScreen" component={StarMapScreen}/>
    <Stack.Screen name = "SpacecraftScreen" component={SpacecraftScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
