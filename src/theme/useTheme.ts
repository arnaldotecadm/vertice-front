import { useContext } from "react";
import { ThemeContext } from "./themeContextValue";

// Access the active theme and setter/toggle. Must be used within a
// <ThemeProvider>.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
