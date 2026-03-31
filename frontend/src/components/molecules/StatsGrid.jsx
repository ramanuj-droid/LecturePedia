import React from "react";
import StatCard from "../atoms/StatCard";

const StatsGrid = ({ stats }) => {
  return (
    <div className="stats-grid">
      {stats.map((item, i) => (
        <StatCard key={i} {...item} />
      ))}
    </div>
  );
};

export default StatsGrid;