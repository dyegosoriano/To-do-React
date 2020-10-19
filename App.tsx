import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import TasksProvider from './src/contexts/Todos'
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <TasksProvider>
        <Routes />
      </TasksProvider>
    </NavigationContainer>
  )
}
