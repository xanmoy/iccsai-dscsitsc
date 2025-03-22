"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent hydration mismatch

  // Determine the active theme
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div>
      {currentTheme === "light" ? (
        <Button variant="ghost" onClick={() => setTheme("dark")}>
          <Moon className="h-5 w-5" />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setTheme("light")}>
          <Sun className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
