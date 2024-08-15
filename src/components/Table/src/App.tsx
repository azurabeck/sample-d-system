// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationProvider } from './NavigationContext';
import Table from './Table';

const App: React.FC = () => (
  <Router>
    <NavigationProvider>
      <Table baseUrl="yourBaseUrl" api="yourApi" />
    </NavigationProvider>
  </Router>
);

export default App;
