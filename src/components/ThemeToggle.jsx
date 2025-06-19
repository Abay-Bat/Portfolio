import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed z-50 rounded-full transition-all duration-300 focus:outline-none",
        scrolled ? "top-2" : "top-3",
        // Responsive positioning
        "right-5 max-sm:right-auto max-sm:left-1",
        // Responsive size
        "p-2 sm:p-2 max-sm:p-1"
      )}
    >
      {isDarkMode ? (
        <Sun className="sm:h-6 sm:w-6 max-sm:h-4 max-sm:w-4 text-yellow-300" />
      ) : (
        <Moon className="sm:h-6 sm:w-6 max-sm:h-4 max-sm:w-4 text-blue-900" />
      )}
    </button>
  );
};
