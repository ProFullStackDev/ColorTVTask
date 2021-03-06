import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNav} from './stackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Navigation;
