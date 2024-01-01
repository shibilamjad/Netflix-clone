import { createContext, useState } from "react";

export const DarkModeContext = createContext;

export function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState();

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
