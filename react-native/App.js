/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Feed } from './components/Feed'
import { Settings } from './components/Settings'
import { Test } from './components/Test'

// TODO: setup flipper for debugging

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  )
}

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Test" component={TestStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
