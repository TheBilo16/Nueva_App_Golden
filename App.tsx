import React from 'react';
import { AuthProvider } from './app/components/context/AuthContext';
import Main from './app/components';
import "./app/database";

console.ignoredYellowBox = ['Setting a timer'];

function App() {
  return <AuthProvider>
    <Main />
  </AuthProvider>
}

export default App;