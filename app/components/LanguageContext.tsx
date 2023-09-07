import React, { createContext, useState, useContext } from "react"

export type Language = "en" | "es" | "pt"

interface LanguageContextProps {
  selectedText: {
    Titulo: string
    SubTitulo: string
    Heading: string
    HeadingSubTitle: string
    Hello: string
    HeaderMenu1: string
    HeaderMenu2: string
    HeaderMenu3: string
  }
  setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>
}

// Provide a default value
const defaultContext: LanguageContextProps = {
  selectedText: { Titulo: "", SubTitulo: "", Heading: "", HeadingSubTitle: "", Hello: "", HeaderMenu1: "," },
  setSelectedLanguage: () => {}, // Provide a no-op function as default
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(defaultContext)
