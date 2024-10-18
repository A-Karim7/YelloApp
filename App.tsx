// App.tsx
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {

  return (
      <>
        <StatusBar style="auto" />
        <AppNavigator />
      </>
  );
};

export default App;
