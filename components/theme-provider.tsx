'use client'

import * as React from 'react'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
  systemTheme: 'light' | 'dark' | undefined
  themes: string[]
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  setTheme: () => {},
  resolvedTheme: 'light',
  systemTheme: undefined,
  themes: ['light', 'dark', 'system'],
})

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  // Accept next-themes-compatible props so call sites don't need to change
  enableSystem?: boolean
  attribute?: string
  disableTransitionOnChange?: boolean
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readThemeCookie(): Theme | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)theme=([^;]*)/)
  const val = match?.[1]
  if (val === 'light' || val === 'dark' || val === 'system') return val
  return null
}

function persistAndApply(resolved: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
  document.cookie = `theme=${resolved}; path=/; max-age=31536000; SameSite=Lax`
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark' | undefined>(undefined)

  useEffect(() => {
    const sys = getSystemTheme()
    setSystemTheme(sys)

    const stored = readThemeCookie()
    const initial: Theme = stored ?? defaultTheme
    setThemeState(initial)

    // Listen for OS-level preference changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      const next = e.matches ? 'dark' : 'light'
      setSystemTheme(next)
      setThemeState((prev) => {
        if (prev === 'system') persistAndApply(next)
        return prev
      })
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [defaultTheme])

  const resolvedTheme: 'light' | 'dark' =
    theme === 'system' ? (systemTheme ?? 'light') : (theme as 'light' | 'dark')

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeState(t)
      const resolved = t === 'system' ? getSystemTheme() : (t as 'light' | 'dark')
      persistAndApply(resolved)
    },
    [],
  )

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, resolvedTheme, systemTheme, themes: ['light', 'dark', 'system'] }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Drop-in replacement for next-themes' useTheme
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}
