import React from "react";
import AboutHero from "../sections/AboutHero";
import AboutCard from "../sections/AboutCard";
import AboutCertificate from "../sections/AboutCertificate";
import HeaderSection from "../sections/HeaderSection";
import FooterSection from "../sections/FooterSection";
 

const About = () => {
  return (
    <>
      <HeaderSection/>
      <AboutHero />
      <AboutCard />
      <AboutCertificate />
      <FooterSection/>
    </>
  );
};

export default About;