import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Utils/Colors';
import MessagerieScreen from '../Screens/MessagerieScreen/MessagerieScreen';
import LogementScreen from '../Screens/LogementsScreen/LogementScreen';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import JobNavigation from './JobNavigation';
import JobScreen from '../Screens/JobScreen/JobScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.light.primary,
        tabBarActiveTintColor: Colors.light.accent,
        tabBarLabelStyle: {
          fontSize: 12,
          fontStyle: "normal",
          textAlign: "center",
          fontWeight: "400",
        },
        tabBarStyle: {
          padding: 2,
          height: 60,
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen 
        name="index"
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
        component={HomeNavigation}
      />
      <Tab.Screen 
        name="jobs"
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="briefcase" size={size} color={color} />
          ),
        }}
        component={JobScreen}
      />
      <Tab.Screen 
        name="logements"
        options={{
          tabBarLabel: 'Logements',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="building" size={size} color={color} />
          ),
        }}
        component={LogementScreen}
      />
      <Tab.Screen 
        name="messagerie"
        options={{
          tabBarLabel: 'Messagerie',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comment" size={size} color={color} />
          ),
        }}
        component={MessagerieScreen}
      />
    </Tab.Navigator>
  );
}
