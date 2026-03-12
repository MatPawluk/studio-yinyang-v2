import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, Language, Translations } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) return 'pl';
    if (browserLang.startsWith('zh') || browserLang.startsWith('cn')) return 'cn';
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang === 'cn' ? 'zh' : lang;
  }, []);

  // Set initial html lang attribute on mount
  React.useEffect(() => {
    document.documentElement.lang = language === 'cn' ? 'zh' : language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
