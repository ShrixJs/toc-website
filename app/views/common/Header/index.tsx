import React, { FC } from 'react';

import './style.css';
import RandomImage from '../RandomImage/index';
import RandomImageSkeleton from '../RandomImage/components/RandomImageSkeleton';
import useFetchImages from '../../hooks/useFetchImages';

const NAV_OPTIONS = ['Home', 'About Us', 'Our Work', 'Our Products', 'Contact Us'];

const Header: FC = () => {
  const { images, isLoading, error } = useFetchImages({ width: 40, height: 40, count: 1 });

  return (
    <header className="header">
      <div className="logo">
        {
          isLoading
            ? <RandomImageSkeleton width="40px" height="40px" />
            : <RandomImage link={images[0] || ''} hasError={error} alt="company-logo" />
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
