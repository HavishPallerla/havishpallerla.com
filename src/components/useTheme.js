'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme ? savedTheme === 'dark' : false;
    setIsDark(prefersDark);
    const root = document.documentElement;
    if (prefersDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  const toggleTheme = (newState) => {
    setIsDark(newState);
    const root = document.documentElement;
    if (newState) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDark, toggleTheme };
}
