"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

export const ThemeSwitcher = () => {
  const [icon, setIcon] = useState(<SunIcon />)
  const [isDark, setIsDark] = useState(true)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIcon(isDark ? <SunIcon /> : <MoonIcon />)
  }, [isDark])

  return (
    <button
      onClick={() => {
        setIsDark(!isDark)
        setIcon(isDark ? <SunIcon /> : <MoonIcon />)
        setTheme(isDark ? "light" : "dark")
      }}>
      {icon}
    </button>
  )
}
