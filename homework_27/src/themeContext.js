import { createContext } from "react";

export const themes = {
  light: {
    color: "black",
    backgroundColor: "#ffffff",
  },
  dark: {
    color: "white",
    backgroundColor: "#121212",
  },
};

export const ThemeContext = createContext();
