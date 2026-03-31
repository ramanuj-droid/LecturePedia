import React from "react";
import FeatureGrid from "../molecules/FeatureGrid";
import { FEATURES } from "../../constants/features";

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <h2>Dashboard</h2>
      <FeatureGrid items={FEATURES} />
    </div>
  );
};

export default FeatureSection;