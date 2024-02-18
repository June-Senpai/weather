import { useEffect } from "react";

export const useTheme = (theme, setTheme) => {
  const element = document.documentElement;

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        setTheme(prefersDarkMode ? "dark" : "light");
        break;
    }
  }, [theme, setTheme]);
};
