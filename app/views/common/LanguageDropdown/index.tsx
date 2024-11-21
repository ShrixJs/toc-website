import React, { FC, useState } from 'react';
import { SupportedLocales } from '../../../types';

import './styles.css';

type Props = {
  changeLanguage: (language: SupportedLocales) => void;
  currentLanguage: SupportedLocales;
};

const languages = [{ value: 'en', label: 'English' }, { value: 'es', label: 'Spanish' }];

const LanguageDropdown: FC<Props> = ({ changeLanguage, currentLanguage }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const languageDisplayName = languages.find((l) => l.value === currentLanguage)!.label;

  const toggleDropdown = () => setOpen(!isOpen);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleDropdown();
    }
  };

  const handleChangeLanguage = (
    e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    if ('key' in e && (e.key === 'Enter' || e.key === ' ')) {
      changeLanguage(e.currentTarget.id as SupportedLocales);
      setOpen(false);
    } else if ('type' in e && e.type === 'click') {
      changeLanguage(e.currentTarget.id as SupportedLocales);
      setOpen(false);
    }
  };

  return (
    <div className="dropdown">
      <div role="button" tabIndex={0} className="dropdown-header" onClick={toggleDropdown} onKeyDown={handleKeyDown}>
        {languageDisplayName}
        <i className={`fa fa-chevron-down icon ${isOpen && 'open'}`} />
      </div>
      <div className={`dropdown-options ${isOpen && 'open'}`}>
        {languages.map((language) => (
          <div key={language.label} role="button" tabIndex={0} className="dropdown-item" onClick={handleChangeLanguage} onKeyDown={handleChangeLanguage} id={language.value}>
            <span className={`dropdown-item-dot ${language.value === currentLanguage && 'selected'}`}>• </span>
            {language.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
