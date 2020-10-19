import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Completed from '../screens/Completed'
import Home from '../screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63'
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            )
          }}
        />
        <Screen
          name="Completed"
          component={Completed}
          options={{
            tabBarLabel: 'Concluídos',
            tabBarIcon: ({ color, size }) => (
              <Feather name="check-square" color={color} size={size} />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
