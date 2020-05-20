import React from 'react';
import { AccountProvider } from './app/components/context/AccountContext';
import { Main } from './app/components';

function App() {
  return <AccountProvider>
    <Main />
  </AccountProvider>
}

export default App;