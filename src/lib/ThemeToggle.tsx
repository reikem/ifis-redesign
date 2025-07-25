import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"


import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu" 

import { useTheme } from "./ThemeProvider"
import { Button } from "../components/ui/button"
import { useLanguage } from "./LanguageProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage?.() ?? { t: (k: string) => k } // fallback por si no usas i18n
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 relative">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4" />
          <span>{t("light")}</span>
          {theme === "light" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4" />
          <span>{t("dark")}</span>
          {theme === "dark" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4" />
          <span>{t("system")}</span>
          {theme === "system" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
