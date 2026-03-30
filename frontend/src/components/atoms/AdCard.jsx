import React from "react";

const AdCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="ad-card">
      <Icon className="ad-icon" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default AdCard;