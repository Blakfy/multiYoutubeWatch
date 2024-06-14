import React, { useEffect, useContext } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "@/utils/DarkModeContext";

export default function DarkMode() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {theme === "dark" ? (
        <SunIcon
          width={30}
          height={20}
          className="cursor-pointer"
          title="Switch to light mode"
          onClick={toggleTheme}
        />
      ) : (
        <MoonIcon
          width={30}
          height={20}
          className="cursor-pointer"
          title="Switch to dark mode"
          onClick={toggleTheme}
        />
      )}
    </>
  );
}
