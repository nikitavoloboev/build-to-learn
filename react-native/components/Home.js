import React from 'react';
import {Button, Text, View} from 'react-native';

export const Home = props => {
  console.log('hi');
  return (
    <View>
      <Text style={{flex: 1, alignItems: 'center'}}>Home</Text>
      <Button
        title="Animations"
        onPress={() => props.navigation('Animation')}
      />
    </View>
  );
};
