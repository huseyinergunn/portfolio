import { createContext, useContext, useState } from 'react'
import { tr } from '../i18n/tr'
import { en } from '../i18n/en'

const translations = { tr, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'tr'
  })

  const toggleLang = (next) => {
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
