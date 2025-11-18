import React from "react";
import "../styles/ThemeToggle.css";

/**
 * ThemeToggle is controlled by parent (App)
 * Props: dark (bool), toggle (function)
 */
export default function ThemeToggle({ dark, toggle }) {
  return (
    <div className={`theme-toggle ${dark ? "dark" : ""}`} onClick={toggle} role="button" aria-label="Toggle theme">
      <div className="theme-circle" />
    </div>
  );
}
