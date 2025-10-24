import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from "../../src/lib/utils"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme == "light") {
      setIsDarkMode(true)
      document.documentElement.classList.add("light");
    }
    else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(false);
    }
    else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(true);
    }
  }
  return (
    <button onClick={toggleTheme}
      className={cn("fixed max-sm:top-4.7 top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
        "hover:cursor-pointer"
      )}
    >
      {""}
      {isDarkMode ? (
        <Moon className='h-6 w-6 text-blue-900' />
      ) : (
        <Sun className='h-6 w-6 text-yellow-300' />
      )
      }

    </button>
  )
}

export default ThemeToggle