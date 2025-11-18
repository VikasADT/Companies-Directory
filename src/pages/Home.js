import React, { useState } from "react";

import useCompanies from "../hooks/useCompanies";

import Filters from "../components/Filters.jsx";
import CompanyCard from "../components/CompanyCard.jsx";
import CompanyTable from "../components/CompanyTable.jsx";
import Pager from "../components/Pagination.jsx";
import SkeletonCard from "../components/SkeletonCard.jsx";
import SkeletonTable from "../components/SkeletonTable.jsx";
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
        <div className="home-wrapper container py-4">

            {/* HEADER */}
            <div className="home-header">
                <h3 className="home-title">Companies Directory</h3>

                {/* MODERN VIEW TOGGLE */}
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

            {/* FILTERS */}
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
                allCompanies={all || []}   // FIXED
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


            {/* SKELETON LOADERS */}
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


            {loading && view === "table" && (
                <div className="mt-3">
                    <SkeletonTable />
                </div>
            )}

            {/* CARD VIEW */}
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
    );
}
