import React from "react";
import { ABOUT_FEATURES } from "../../constants/about";
import AboutCardItem from "../molecules/AboutCardItem";

const AboutCardContent = () => {
  return (
    <div className="about-card-content">
      <div className="header">
        <h2>{ABOUT_FEATURES.title}</h2>
        <p>{ABOUT_FEATURES.subtitle}</p>
      </div>

      <div className="cards">
        {ABOUT_FEATURES.cards.map((card, index) => (
          <AboutCardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AboutCardContent;