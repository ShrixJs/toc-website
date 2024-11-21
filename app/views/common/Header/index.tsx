import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Scrollbars from 'react-custom-scrollbars-2';

import RandomImage from '../RandomImage/index';
import RandomImageSkeleton from '../RandomImage/components/RandomImageSkeleton';
import useFetchImages from '../../hooks/useFetchImages';

import './style.css';
import { SupportedLocales } from '../../../types';
import LanguageDropdown from '../LanguageDropdown';

interface CustomScrollbars extends Scrollbars {
  view: HTMLDivElement;
}

type Props = {
  changeLanguage: (language: SupportedLocales) => void;
  currentLanguage: SupportedLocales;
  scrollbarRef: React.RefObject<CustomScrollbars>;
};

const NAV_OPTIONS = [
  { name: 'Home', to: 'home', messageKey: 'home' },
  { name: 'About Us', to: 'about', messageKey: 'aboutUs' },
  { name: 'Our Work', to: 'our-work', messageKey: 'ourWork' },
  { name: 'Our Products', to: 'our-products', messageKey: 'ourProducts' },
  { name: 'Contact Us', to: 'contact-us', messageKey: 'contactUs' },
];

const Header: FC<Props> = ({ changeLanguage, currentLanguage, scrollbarRef }) => {
  const { images, isLoading, error } = useFetchImages({ width: 40, height: 40, count: 1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element && scrollbarRef.current) {
      const scrollableView = scrollbarRef.current.view;
      scrollableView.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

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
            {
              NAV_OPTIONS.map(
                (option) => (
                  <li key={option.name}>
                    <button className="nav-link" type="button" onClick={() => scrollToSection(option.to)}>
                      <FormattedMessage key={option.messageKey} id={option.messageKey} />
                    </button>
                  </li>
                ),
              )
            }
          </ul>
        </nav>
        <LanguageDropdown changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
      </div>
    </header>
  );
};

export default Header;
