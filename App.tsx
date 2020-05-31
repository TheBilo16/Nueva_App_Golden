import React from 'react';
import { AuthProvider } from './app/components/context/AuthContext';
import Main from './app/components';
import { DatabaseProvider } from './app/components/context/DatabaseContext';

function App() {
  return <DatabaseProvider>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </DatabaseProvider>
}

export default App;