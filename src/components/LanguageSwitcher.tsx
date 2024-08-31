import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css"; // Poprawna ścieżka do pliku CSS

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("pl")}>Polski</button>
    </div>
  );
};

export default LanguageSwitcher;
