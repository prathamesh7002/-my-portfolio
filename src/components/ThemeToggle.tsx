"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | undefined>(undefined);
  // Using a 'mounted' state helps ensure client-side only logic runs after the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after hydration.
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Set the theme based on stored preference or system preference.
    setTheme(storedTheme || (prefersDark ? "dark" : "light"));
    setMounted(true); // Indicate that the component has mounted and client-side logic has run.
  }, []); // Empty dependency array ensures this runs once on mount.

  useEffect(() => {
    // This effect applies the theme class to the documentElement when the theme state changes.
    // It only runs if 'theme' is defined (i.e., after the initial determination).
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]); // Run this effect when the 'theme' state changes.

  const toggleTheme = () => {
    if (theme === undefined) return; // Guard against toggling before theme is determined.

    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme); // Persist the new theme preference.
    setTheme(newTheme); // Update the theme state.
  };

  // Until the component is mounted and the theme is determined,
  // render a placeholder button. This ensures that the server-rendered output
  // and the initial client-render (before useEffect runs) match.
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
        {/* Placeholder: A button of the same size but without an icon. */}
        {/* The size="icon" prop makes it h-10 w-10. Lucide icons are h-5 w-5 by default. */}
      </Button>
    );
  }

  // Once mounted and the theme is determined, render the actual button with the correct icon.
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeToggle;
