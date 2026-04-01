import React from "react";
import * as Icons from "react-icons/fa";

const AboutCardItem = ({ icon, title, description }) => {
  const IconComponent = Icons[icon];

  return (
    <div className="about-card-item">
      <div className="icon">
        {IconComponent && <IconComponent />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AboutCardItem;