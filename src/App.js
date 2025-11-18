import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import "./styles/dark.css";
import MorphingToggle from "./components/MorphingToggle";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  const toggleTheme = () => {
    const newVal = !dark;
    setDark(newVal);
    localStorage.setItem("theme", newVal ? "dark" : "light");
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="theme-toggle-container">
        <MorphingToggle dark={dark} toggle={toggleTheme} />
      </div>

      <Home />
    </div>
  );
}
