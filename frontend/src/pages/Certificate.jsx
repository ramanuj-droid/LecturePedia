import React from "react";
import SidebarSection from "../sections/SidebarSection";
import CertificatePageSection from "../sections/CertificatePageSection";

const Certificate = () => {
  return (
    <div className="certificate-page">
      <SidebarSection />

      <div className="certificate-content">
        <CertificatePageSection />
      </div>
    </div>
  );
};

export default Certificate;