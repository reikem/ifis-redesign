import  {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
  } from "react"
  
  type Theme = "light" | "dark" | "system"
  
  type ThemeContextType = {
    theme: Theme
    setTheme: (t: Theme) => void
  }
  
  const ThemeContext = createContext<ThemeContextType | null>(null)
  
  function applyTheme(theme: Theme) {
    const root = document.documentElement
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const effective = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme
  
    if (effective === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }
  
  export function ThemeProvider({ defaultTheme = "system", children }: { defaultTheme?: Theme; children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
      const saved = localStorage.getItem("theme") as Theme | null
      return saved ?? defaultTheme
    })
  

    useEffect(() => {
      applyTheme(theme)
      if (theme === "system") {
        localStorage.removeItem("theme")
      } else {
        localStorage.setItem("theme", theme)
      }
    }, [theme])

    useEffect(() => {
      if (theme !== "system") return
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      const handler = () => applyTheme("system")
      mql.addEventListener("change", handler)
      return () => mql.removeEventListener("change", handler)
    }, [theme])
  
    const value = useMemo<ThemeContextType>(
      () => ({
        theme,
        setTheme: (t) => setThemeState(t),
      }),
      [theme]
    )
  
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  }
  
  export function useTheme() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
    return ctx
  }
  