import React from "react";
import "../styles/LoaderCard.css";

export default function LoaderCard() {
  return (
    <div className="loader-card">
      <div className="loader-line title"></div>
      <div className="loader-line short"></div>
      <div className="loader-line tag"></div>
    </div>
  );
}
