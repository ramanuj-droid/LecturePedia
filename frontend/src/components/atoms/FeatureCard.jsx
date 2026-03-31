import React from "react";

const FeatureCard = ({ title, desc, icon: Icon, color }) => {
  return (
    <div className="feature-card" style={{ borderTop: `4px solid ${color}` }}>
      <Icon className="feature-icon" style={{ color }} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default FeatureCard;