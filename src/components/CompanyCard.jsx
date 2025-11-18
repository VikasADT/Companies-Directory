import React from "react";
import "../styles/CompanyCard.css";

export default function CompanyCard({ company }) {
  const goToWebsite = () => {
    if (company.website) {
      window.open(company.website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="company-card" onClick={goToWebsite}>
      <div className="logo-section">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="company-logo"
        />
      </div>

      <h5 className="company-title">{company.name}</h5>
      <p className="company-sub">{company.description}</p>

      <div className="company-tags">
        <span className="tag">{company.location}</span>
        <span className="tag">{company.industry}</span>
      </div>
    </div>
  );
}
