import React, { createContext, useState, ReactNode } from 'react';
interface AppState { format: string; setFormat: (f: string) => void; }
export const AppContext = createContext<AppState>({} as AppState);
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [format, setFormat] = useState('pdf');
    return <AppContext.Provider value={{ format, setFormat }}>{children}</AppContext.Provider>;
};
