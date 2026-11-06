import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./styles/LanguageSwitcher.css";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`lang-switcher-container ${className}`} data-cursor="disable">
      <button
        type="button"
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        data-cursor="disable"
      >
        EN
      </button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={`lang-btn ${language === "mn" ? "active" : ""}`}
        onClick={() => setLanguage("mn")}
        aria-label="Монгол хэл рүү шилжих"
        data-cursor="disable"
      >
        MN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
