"use client"
import { useState } from "react"
import { LanguageContext, Language } from "./LanguageContext"
import { TranslationText } from "./TranslationText"
import { ThemeProvider } from "../theme-provider"

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("pt")

  const selectedText = TranslationText[selectedLanguage]

  return (
    <ThemeProvider>
      <LanguageContext.Provider value={{ selectedText, setSelectedLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}
