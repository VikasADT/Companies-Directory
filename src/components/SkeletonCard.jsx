import React from "react";
import "../styles/Skeleton.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-logo shimmer"></div>
      <div className="skeleton-line w-60 shimmer"></div>
      <div className="skeleton-line w-40 shimmer"></div>

      <div className="skeleton-tag-box">
        <div className="skeleton-tag shimmer"></div>
        <div className="skeleton-tag shimmer"></div>
      </div>
    </div>
  );
}
