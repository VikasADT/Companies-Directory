// src/components/TopBar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import MorphingToggle from "./MorphingToggle";
import LogoutButton from "./LogoutButton";
import "../styles/TopBar.css";

export default function TopBar({ dark, toggleTheme, onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      
      <div className="topbar-left" onClick={() => navigate("/")}>
        <img src="/logos/logo.png" alt="Logo" className="topbar-logo" />
        <span className="topbar-title">FLM Companies Directory</span>
      </div>

      <div className="topbar-right">
        <MorphingToggle dark={dark} toggle={toggleTheme} />
        <LogoutButton onLogout={onLogout} />
      </div>

    </div>
  );
}
