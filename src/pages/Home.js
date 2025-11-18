// src/pages/Home.js
import React, { useState } from "react";

import useCompanies from "../hooks/useCompanies";
import Filters from "../components/Filters";
import CompanyCard from "../components/CompanyCard";
import CompanyTable from "../components/CompanyTable";
import Pager from "../components/Pagination";
import SkeletonCard from "../components/SkeletonCard";
import SkeletonTable from "../components/SkeletonTable";

import "../styles/Home.css";

export default function Home() {
  const {
    all,
    companies,
    loading,
    search, setSearch,
    location, setLocation,
    industry, setIndustry,
    locations, industries,
    sortBy, setSortBy,
    page, setPage,
    pages
  } = useCompanies();

  const [view, setView] = useState("cards");

  return (
    <div className="page-animate">
      <div className="home-wrapper container py-4">

        {/* HEADER */}
        <div className="home-header">
          <h3 className="home-title">Companies Directory</h3>

          <div className="view-toggle">
            <button
              className={`toggle-btn ${view === "cards" ? "active" : ""}`}
              onClick={() => setView("cards")}
            >
              🗂 Cards
            </button>

            <button
              className={`toggle-btn ${view === "table" ? "active" : ""}`}
              onClick={() => setView("table")}
            >
              📊 Table
            </button>
          </div>
        </div>

        {/* FILTER BAR */}
        <Filters
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          industry={industry}
          setIndustry={setIndustry}
          locations={locations}
          industries={industries}
          sortBy={sortBy}
          setSortBy={setSortBy}
          allCompanies={all}
        />

        {/* FILTER CHIPS */}
        <div className="filter-chips">
          {location && (
            <div className="chip" onClick={() => setLocation("")}>
              {location} ✕
            </div>
          )}
          {industry && (
            <div className="chip" onClick={() => setIndustry("")}>
              {industry} ✕
            </div>
          )}
          {search && (
            <div className="chip" onClick={() => setSearch("")}>
              “{search}” ✕
            </div>
          )}
        </div>

        {/* SKELETONS */}
        {loading && view === "cards" && (
          <div className="row g-4 mt-3">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <div className="col-lg-4 col-md-6" key={id}>
                <SkeletonCard />
              </div>
            ))}
          </div>
        )}

        {loading && view === "table" && (
          <div className="mt-3">
            <SkeletonTable />
          </div>
        )}

        {/* CARDS VIEW */}
        {!loading && view === "cards" && (
          <div className="row g-4 mt-3">
            {companies.map((c) => (
              <div className="col-lg-4 col-md-6" key={c.id}>
                <CompanyCard company={c} />
              </div>
            ))}

            {companies.length === 0 && (
              <p className="empty-text">No companies found.</p>
            )}
          </div>
        )}

        {/* TABLE VIEW */}
        {!loading && view === "table" && (
          <div className="glass-table-wrapper mt-3">
            <CompanyTable companies={companies} />
          </div>
        )}

        {/* PAGINATION */}
        {!loading && companies.length > 0 && (
          <Pager
            page={page}
            pages={pages}
            setPage={(p) => {
              setPage(p);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
      </div>
    </div>
  );
}
