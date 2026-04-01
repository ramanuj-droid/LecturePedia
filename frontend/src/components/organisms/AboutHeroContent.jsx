import React from "react";
import Button from "../atoms/Button";
import { ABOUT_HERO } from "../../constants/about";

const AboutHeroContent = () => {
  return (
    <div className="about-hero-content">
      <div className="left">
        <h1>{ABOUT_HERO.title}</h1>
        <h3>{ABOUT_HERO.subtitle}</h3>
        <p>{ABOUT_HERO.description}</p>
        <Button text={ABOUT_HERO.buttonText} />
      </div>

      <div className="right">
        <img src={ABOUT_HERO.image} alt="About LearnX" />
      </div>
    </div>
  );
};

export default AboutHeroContent;