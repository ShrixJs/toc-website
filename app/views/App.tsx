import React, { FC, useState } from 'react';
import { IntlProvider } from 'react-intl';

import Header from './common/Header/index';
import Home from './layouts/Home';
import Portfolio from './layouts/Portfolio';
import ContactUs from './layouts/ContactUs';

import messages from './messages';
import { SupportedLocales } from '../types';

const App: FC = () => {
  const [locale, setLocale] = useState<SupportedLocales>('en');

  const changeLocale = (language: SupportedLocales) => setLocale(language);

  console.log(locale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Header changeLanguage={changeLocale} />
      <Home />
      <Portfolio />
      <ContactUs />
    </IntlProvider>
  );
};

export default App;
