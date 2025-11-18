import React from "react";
import "../styles/ViewToggle.css";

export default function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle">
      <button
        className={view === "cards" ? "active" : ""}
        onClick={() => setView("cards")}
      >
        Cards
      </button>
      <button
        className={view === "table" ? "active" : ""}
        onClick={() => setView("table")}
      >
        Table
      </button>
    </div>
  );
}
