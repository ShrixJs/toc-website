import React, { FC } from 'react';
import Header from './common/Header/index';
import Home from './layouts/Home';
import Portfolio from './layouts/Portfolio';

const App: FC = () => (
  <>
    <Header />
    <Home />
    <Portfolio />
  </>
);

export default App;
