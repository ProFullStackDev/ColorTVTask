import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOne, ScreenTwo, ScreenThree} from '../../screens';

const StackNavigator = createStackNavigator ();

export default function StackNav () {
  return (
    <StackNavigator.Navigator initialRouteName="Screen1">
      <StackNavigator.Screen
        name="Screen1"
        component={ScreenOne}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Screen2"
        component={ScreenTwo}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Screen3"
        component={ScreenThree}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}
