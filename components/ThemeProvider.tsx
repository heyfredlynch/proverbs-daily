// components/ThemeProvider.tsx
"use client";
import React, { createContext, useContext, ReactNode } from 'react';

const defaultTheme = {
  colors: {
    text: {
      primary: 'text-gray-900',  // Darkest
      secondary: 'text-gray-600', // Medium
      tertiary: 'text-gray-400'   // Lighter
    },
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100'
    },
    accent: {
      primary: 'text-blue-600',
      secondary: 'text-blue-500'
    }
  }
};

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const ThemedText = ({ 
  variant = 'primary', 
  className = '', 
  children 
}: { 
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children: ReactNode;
}) => {
  const theme = useTheme();
  
  return (
    <span className={`${theme.colors.text[variant]} ${className}`}>
      {children}
    </span>
  );
};