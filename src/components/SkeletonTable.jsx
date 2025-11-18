import React from "react";
import "../styles/Skeleton.css";

export default function SkeletonTable() {
  return (
    <div className="skeleton-table-box">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="skeleton-table-row shimmer"></div>
      ))}
    </div>
  );
}
