import React from "react";
import CertificateCard from "../molecules/CertificateCard";
import ReviewForm from "../molecules/ReviewForm";

const CertificateSection = () => {
  const handleDownload = () => {
    window.print(); // simple PDF
  };

  return (
    <div className="certificate-section">

      <CertificateCard />

      {/* Actions */}
      <div className="certificate-actions">
        <button onClick={handleDownload}>
          Download PDF
        </button>
      </div>

      <ReviewForm />

    </div>
  );
};

export default CertificateSection;