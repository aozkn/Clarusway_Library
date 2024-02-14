// Theme Context

import { createContext, useState, useContext } from "react";

//! 1- Login Context'i olusuturuldu
const ThemeContext = createContext();

//! 2-Sarmalayici (Provider) Component
const ThemeContextProvider = ({ children }) => {
  // //! Local State
  const [myTheme, setMyTheme] = useState("light");

  const values = {
    myTheme,
    setMyTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

//! 3- consuming custom hook
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
