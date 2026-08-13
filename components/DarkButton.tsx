"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function DarkButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)

  // useEffect to handle mounting and initial theme
  React.useEffect(() => {
    setMounted(true)
    setIsChecked(theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setIsChecked(newTheme === "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 dark:text-gray-400" />
      <Switch
        className=" bg-black"
        checked={isChecked}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] text-gray-400 dark:text-yellow-400" />
    </div>
  )
}

