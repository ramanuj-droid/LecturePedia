import React from "react";
import { CERTIFICATE_DATA } from "../../constants/certificate";

const CertificateCard = () => {
  return (
    <div className="certificate-card">
      <h1>Certificate of Completion</h1>

      <p>This is to certify that</p>
      <h2>{CERTIFICATE_DATA.name}</h2>

      <p>has successfully completed the course</p>
      <h3>{CERTIFICATE_DATA.course}</h3>

      <p>Date: {CERTIFICATE_DATA.date}</p>
    </div>
  );
};

export default CertificateCard;