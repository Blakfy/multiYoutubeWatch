"use client";
import React from "react";
import { Theme } from "@radix-ui/themes";
//? useContext API
import { ThemeContext } from "./DarkModeContext";

export default function RadixTheme({ children }) {
  const [theme, setTheme] = React.useState("dark");
  const themeData = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <Theme
        appearance={theme === "dark" ? "dark" : "light"}
        accentColor="orange"
        grayColor="mauve"
        radius="small"
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
}
