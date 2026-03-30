import React from "react";
import AdCarousel from "../components/molecules/AdCarousel";

const AdSection = () => {
  return (
    <section className="ad-section">
      <div className="ad-container">

        <h2 className="ad-title">Why Choose Our Platform?</h2>

        <AdCarousel />

      </div>
    </section>
  );
};

export default AdSection;