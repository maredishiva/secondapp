import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

LogBox.ignoreAllLogs();

const App = () => {
  return (
      <AppNavigator />   
  );
};

export default App;
