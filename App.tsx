
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

export default App;
