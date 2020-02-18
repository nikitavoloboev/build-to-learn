/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Animation} from './components/Animation';
import {Home} from './components/Home';

const Stack = createStackNavigator();

// TODO: setup flipper for debugging
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animation" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;
