/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LogBox} from 'react-native';
import Navigation from './src/MainNavigator';
LogBox.ignoreAllLogs ();

const App = () => {
  return <Navigation />;
};

export default App;
