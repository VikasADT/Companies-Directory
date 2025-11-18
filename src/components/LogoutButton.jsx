// src/components/LogoutButton.js
import React from "react";
import "../styles/LogoutButton.css";

export default function LogoutButton() {

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("sessionExpiry");

    // FORCE IMMEDIATE RELOAD + REDIRECT
    window.location.href = "/login";
  };

  return (
    <button className="logout-circle" onClick={logout}>
      <span className="logout-gear">⚙️</span>
    </button>
  );
}
