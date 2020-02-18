import React from 'react';
import {Button, Text, View} from 'react-native';

export const Animation = props => {
  return (
    <View>
      <Text style={{flex: 1, alignItems: 'center'}}>Animations</Text>
      <Button
        title="Go Back"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
