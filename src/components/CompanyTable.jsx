import React from "react";
import "../styles/CompanyTable.css";

export default function CompanyTable({ companies }) {

  const openSite = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    
      <table className="company-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Location</th>
            <th>Industry</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((c) => (
            <tr key={c.id} onClick={() => openSite(c.website)}>
              <td className="company-cell">
                <img src={c.logo} alt="" className="company-table-logo" />
                {c.name}
              </td>
              <td>{c.location}</td>
              <td>{c.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
  );
}
