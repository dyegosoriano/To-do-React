import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import { todosContext } from '../contexts/Todos'

import Completed from '../screens/Completed'
import Loading from '../screens/Loading'
import Home from '../screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

const Routes: React.FC = () => {
  const { loading } = useContext(todosContext)

  if (loading) {
    return <Loading />
  }

  return (
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
  )
}

export default Routes
