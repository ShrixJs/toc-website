import React, { FC, useState } from 'react';
import { IntlProvider } from 'react-intl';
import Scrollbars from 'react-custom-scrollbars-2';

import Header from './common/Header/index';
import Home from './layouts/Home';
import Portfolio from './layouts/Portfolio';
import ContactUs from './layouts/ContactUs';

import messages from './messages';
import { SupportedLocales } from '../types';

import './styles.css';

const App: FC = () => {
  const [locale, setLocale] = useState<SupportedLocales>('en');

  const changeLocale = (language: SupportedLocales) => setLocale(language);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Scrollbars
        style={{ width: '100%', height: '100%', zIndex: '1' }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        renderTrackVertical={(props) => <div className="track-vertical" {...props} />}
        renderThumbVertical={(props) => <div className="thumb-vertical" {...props} />}
      >
        <div className="main">
          <Header changeLanguage={changeLocale} currentLanguage={locale} />
          <Home />
          <Portfolio />
          <ContactUs />
        </div>
      </Scrollbars>
    </IntlProvider>
  );
};

export default App;
