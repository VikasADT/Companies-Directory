import { useEffect, useState } from "react";
import { fetchCompanies } from "../api/client";

export default function useCompanies() {
    const [all, setAll] = useState([]);
    const [filteredAll, setFilteredAll] = useState([]); 
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Restore filters from localStorage
    const [search, setSearch] = useState(localStorage.getItem("search") || "");
    const [location, setLocation] = useState(localStorage.getItem("location") || "");
    const [industry, setIndustry] = useState(localStorage.getItem("industry") || "");
    const [sortBy, setSortBy] = useState(localStorage.getItem("sort") || "name_asc");

    // Pagination
    const [page, setPage] = useState(1);
    const perPage = 6;

    const [locations, setLocations] = useState([]);
    const [industries, setIndustries] = useState([]);

    // Load JSON once
    useEffect(() => {
        (async () => {
            const data = await fetchCompanies();

            setAll(data);
            setLocations([...new Set(data.map(c => c.location))]);
            setIndustries([...new Set(data.map(c => c.industry))]);

            // Fake API delay to show skeleton loader
            setTimeout(() => {
                setLoading(false);
            }, 800);
        })();
    }, []);

    // Save filters to localStorage
    useEffect(() => {
        localStorage.setItem("search", search);
        localStorage.setItem("location", location);
        localStorage.setItem("industry", industry);
        localStorage.setItem("sort", sortBy);
    }, [search, location, industry, sortBy]);

    // Apply search + filters + sorting
    useEffect(() => {
        let filtered = [...all];

        // Search
        if (search.trim()) {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filters
        if (location) filtered = filtered.filter(c => c.location === location);
        if (industry) filtered = filtered.filter(c => c.industry === industry);

        // Sorting
        const [field, dir] = sortBy.split("_");
        filtered.sort((a, b) =>
            dir === "asc"
                ? a[field].localeCompare(b[field])
                : b[field].localeCompare(a[field])
        );

        setFilteredAll(filtered);

        // Reset page if filters change
        setPage(1);

    }, [all, search, location, industry, sortBy]);

    // Pagination calculation
    useEffect(() => {
        const start = (page - 1) * perPage;
        setCompanies(filteredAll.slice(start, start + perPage));

        // Auto-scroll top on page change
        window.scrollTo({ top: 0, behavior: "smooth" });

    }, [filteredAll, page]);

    const pages = Math.ceil(filteredAll.length / perPage);

    return {
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
    };
}
