import React, { FC } from 'react';

import './style.css';
import RandomImage from '../RandomImage/index';

const NAV_OPTIONS = ['Home', 'About Us', 'Our Work', 'Our Products', 'Contact Us'];

const Header: FC = () => (
  <header className="header">
    <RandomImage className="logo" width="40" height="40" alt="company-logo"/>
    <nav className="navigation">
      <ul>
        {NAV_OPTIONS.map((option) => <li key={option}><a href='/'>{option}</a></li>)}
      </ul>
    </nav>
  </header>
)

export default Header;
