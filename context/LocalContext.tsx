// context/LocaleContext.tsx
"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocaleContextType {
    locale: string;
    setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<string>(() => localStorage.getItem('locale') || 'fr');

    useEffect(() => {
        localStorage.setItem('locale', locale);
    }, [locale]);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
