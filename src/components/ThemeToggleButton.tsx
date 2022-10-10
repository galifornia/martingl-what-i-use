import React, { useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

const themes = ['light', 'dark']

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }

    if (typeof localStorage !== undefined && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    console.log('press')
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl">
      <div
        onClick={toggleTheme}
        className="cursor-pointer bg-gray-600 dark:bg-gray-300 p-2 text-white dark:text-black rounded-xl"
      >
        {theme === 'light' ? <BsMoon /> : <BsSun />}
      </div>
    </div>
  ) : (
    <div></div>
  )
}
