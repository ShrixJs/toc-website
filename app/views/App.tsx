import React, { FC } from 'react';
import Header from './common/Header/index';
import Home from './layouts/Home';
import Portfolio from './layouts/Portfolio';
import ContactUs from './layouts/ContactUs';

const App: FC = () => (
  <>
    <Header />
    <Home />
    <Portfolio />
    <ContactUs />
  </>
);

export default App;
