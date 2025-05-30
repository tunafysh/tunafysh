"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function switchTheme() {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button size="icon" onClick={switchTheme} className="bg-background text-foreground hover:bg-background dark:bg-background dark:text-foreground shadow-none">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
    </Button>
  )
}