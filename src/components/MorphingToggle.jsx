import React from "react";
import "../styles/morphing-toggle.css";

export default function MorphingToggle({ dark, toggle }) {
  return (
    <div
      className={`morph-toggle ${dark ? "dark" : "light"}`}
      onClick={toggle}
    >
      <div className="morph-thumb">
        <div className="sun-ray ray1"></div>
        <div className="sun-ray ray2"></div>
        <div className="sun-ray ray3"></div>
        <div className="sun-core"></div>
        <div className="moon-cutout"></div>
      </div>
    </div>
  );
}
