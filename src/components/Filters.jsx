import React, { useState } from "react";
import "../styles/Filters.css";

export default function Filters({
  search, setSearch,
  location, setLocation,
  industry, setIndustry,
  locations, industries,
  sortBy, setSortBy,
  allCompanies
}) {

  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);

    if (!text.trim()) {
      setSuggestions([]);
      return;
    }

    const matches = allCompanies
      .filter(c => c.name.toLowerCase().includes(text.toLowerCase()))
      .slice(0, 5);

    setSuggestions(matches);
  };

  const applySuggestion = (name) => {
    setSearch(name);
    setSuggestions([]);
  };

  return (
    <div className="filters-navbar shadow-sm position-relative">

      {/* SEARCH INPUT (FULL WIDTH) */}
      <input
        className="filter-control filter-search"
        placeholder="Search company..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* AUTOCOMPLETE */}
      {suggestions.length > 0 && (
        <div className="autocomplete-box">
          {suggestions.map((s) => (
            <div
              key={s.id}
              className="autocomplete-item"
              onClick={() => applySuggestion(s.name)}
            >
              <img src={s.logo} alt="" className="auto-logo" />
              {s.name}
            </div>
          ))}
        </div>
      )}

      {/* LOCATION */}
      <select
        className="filter-control"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        {locations.map((loc) => <option key={loc}>{loc}</option>)}
      </select>

      {/* INDUSTRY */}
      <select
        className="filter-control"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      >
        <option value="">All Industries</option>
        {industries.map((ind) => <option key={ind}>{ind}</option>)}
      </select>

      {/* SORT */}
      <select
        className="filter-control"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name_asc">A → Z</option>
        <option value="name_desc">Z → A</option>
      </select>

    </div>
  );
}
