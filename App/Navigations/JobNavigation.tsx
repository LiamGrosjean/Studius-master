import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import MesCandidatures from '../Screens/ProfilScreen/MesCandidatures';
import JobScreen from '../Screens/JobScreen/JobScreen';
import DetailJobScreen from '../Screens/DetailJobScreen/DetailJobScreen';
import AjouterJob from '../Screens/ProfilScreen/AjouterJob';


const Stack = createStackNavigator();

export default function JobNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="mes-candidatures" component={MesCandidatures} />
      <Stack.Screen name="jobs" component={JobScreen} />
      <Stack.Screen name="DetailJobScreen" component={DetailJobScreen} />
      <Stack.Screen name="AjouterJob" component={AjouterJob} /> {/* Ajouter cette ligne */}
    </Stack.Navigator>
  )
}