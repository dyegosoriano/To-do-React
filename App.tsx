import React from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Home from './src/screens/Home'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />

      <Home />
    </SafeAreaView>
  )
}
