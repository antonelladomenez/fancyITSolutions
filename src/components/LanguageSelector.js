import React from "react";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import "../styles/languageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <NavDropdown
      title={i18n.t("language")}
      id="language-nav-dropdown"
      className="text-center custom-nav-dropdown"
      drop="down" // Forzamos el dropdown hacia abajo
    >
      <NavDropdown.Item className="custom-dropdown-item" onClick={() => changeLanguage("en")}>
        English
      </NavDropdown.Item>
      <NavDropdown.Item className="custom-dropdown-item" onClick={() => changeLanguage("es")}>
        Español
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default LanguageSelector;
