import React, { FC } from 'react';

import './style.css';
import RandomImage from '../RandomImage/index';
import useImage from '../../hooks/useImage';
import RandomImageSkeleton from '../RandomImage/components/RandomImageSkeleton';

const NAV_OPTIONS = ['Home', 'About Us', 'Our Work', 'Our Products', 'Contact Us'];

const Header: FC = () => {
  const { resources, isLoading, hasError } = useImage({ type: 'single', width: 40, height: 40 });

  return (
    <header className="header">
      <div className="logo">
        {
          isLoading
            ? <RandomImageSkeleton width="40px" height="40px" />
            : <RandomImage link={resources[0] || ''} hasError={hasError} alt="company-logo" />
        }
      </div>
      <div className="right-side">
        <nav className="navigation">
          <ul>
            {NAV_OPTIONS.map((option) => <li key={option}><a href="#about">{option}</a></li>)}
          </ul>
        </nav>
        <select>
          <option value="english">english</option>
          <option value="spanish">spanish</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
