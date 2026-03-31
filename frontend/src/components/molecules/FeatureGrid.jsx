import React from "react";
import FeatureCard from "../atoms/FeatureCard";

const FeatureGrid = ({ items }) => {
  return (
    <div className="feature-grid">
      {items.map((item, index) => (
        <FeatureCard key={index} {...item} />
      ))}
    </div>
  );
};

export default FeatureGrid;