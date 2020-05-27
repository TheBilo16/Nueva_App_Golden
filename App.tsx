import React from 'react';
import { AccountProvider } from './app/components/context/AccountContext';
import { Main } from './app/components';
import { DatabaseProvider } from './app/components/context/DatabaseContext';

function App() {
  return <DatabaseProvider>
    <AccountProvider>
      <Main />
    </AccountProvider>
  </DatabaseProvider>
}

export default App;