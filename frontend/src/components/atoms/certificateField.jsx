import React from "react";

const CertificateField = ({ label, value }) => {
  return (
    <p>
      <strong>{label}: </strong> {value}
    </p>
  );
};

export default CertificateField;