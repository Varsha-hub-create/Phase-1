import React, { useState, useContext, createContext } from "react";
import './App.css';

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};


const ThemedPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>

      <h1>{theme.toUpperCase()} MODE</h1>
      <ThemeSwitcher />
    </div>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <ThemedPage />
    </ThemeProvider>
  );
};

export default App;
