import React, { FC } from 'react';
import Slideshow from './components/Slideshow';
import AboutUs from './components/AboutUs';

import './styles.css';

const Home: FC = () => (
  <section className="home">
    <Slideshow />
    <AboutUs />
  </section>
);

export default Home;
