import React from "react";
import { ABOUT_CERTIFICATE } from "../../constants/about";
import AboutCertificateCTA from "../molecules/AboutCertificateCTA";

const AboutCertificateContent = () => {
  return (
    <div className="about-certificate-content">
      <div className="left">
        <img
          src={ABOUT_CERTIFICATE.image}
          alt="Certificate"
        />
      </div>

      <div className="right">
        <h2>{ABOUT_CERTIFICATE.title}</h2>
        <h4>{ABOUT_CERTIFICATE.subtitle}</h4>
        <p>{ABOUT_CERTIFICATE.description}</p>

        <AboutCertificateCTA text={ABOUT_CERTIFICATE.buttonText} />
      </div>
    </div>
  );
};

export default AboutCertificateContent;