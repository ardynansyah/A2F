import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'a2f-theme'
const DEFAULT_THEME = 'dark'

function readInitialTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'light' || saved === 'dark' ? saved : DEFAULT_THEME
}

// Mengelola tema gelap/terang pada elemen <html>. Nilai awal juga diterapkan
// oleh skrip inline di index.html supaya tidak ada kedipan saat memuat.
export default function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.dataset.theme = theme
    root.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
