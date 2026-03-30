import React from "react";
import FooterLink from "../atoms/FooterLink";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </div>
  );
};

export default FooterColumn;