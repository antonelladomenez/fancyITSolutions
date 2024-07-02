import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <NavDropdown title={i18n.t('language')} id="language-nav-dropdown" className='text-center'>
      <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeLanguage('es')}>Español</NavDropdown.Item>
    </NavDropdown>
  );
};

export default LanguageSelector;
