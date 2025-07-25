import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
  } from "react"
import { translations, type LangCode } from "../data/traslation"
  

  type LanguageContextType = {
    currentLanguage: LangCode
    setCurrentLanguage: (lang: LangCode) => void
    t: (key: keyof typeof translations["es"]) => string
  }
  
  const LanguageContext = createContext<LanguageContextType | null>(null)
  
  export const useLanguage = () => {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error("useLanguage debe usarse dentro de LanguageProvider")
    return ctx
  }
  
  export function LanguageProvider({ children }: { children: ReactNode }) {
    const [currentLanguage, setCurrentLanguageState] = useState<LangCode>(() => {
      const saved = localStorage.getItem("lang") as LangCode | null
      return saved ?? "es"
    })
  
    useEffect(() => {

      document.documentElement.setAttribute("lang", currentLanguage)
      localStorage.setItem("lang", currentLanguage)
    }, [currentLanguage])
  
    const setCurrentLanguage = (lang: LangCode) => setCurrentLanguageState(lang)
  
    const t = useMemo(
      () => (key: keyof typeof translations["es"]) =>
        translations[currentLanguage]?.[key] ?? key,
      [currentLanguage]
    )
  
    const value = useMemo(
      () => ({ currentLanguage, setCurrentLanguage, t }),
      [currentLanguage, t]
    )
  
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    )
  }
  