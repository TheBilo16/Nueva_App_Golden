import React from 'react';
import { AuthProvider } from './app/components/context/AuthContext';
import Main from './app/components';
import "./app/database";

const App = () : JSX.Element => {
  return <AuthProvider>
    <Main />
  </AuthProvider>
}

export default App;