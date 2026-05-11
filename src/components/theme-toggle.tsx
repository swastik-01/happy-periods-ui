import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors border border-white/10 dark:text-cream dark:bg-white/10 dark:hover:bg-white/20"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground dark:text-cream" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground dark:text-cream" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
