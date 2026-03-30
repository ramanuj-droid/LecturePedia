import React from "react";
import { FOOTER_DATA } from "../../constants/footer";
import FooterColumn from "../molecules/FooterColumn";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-brand">
        <h2>{FOOTER_DATA.brand}</h2>
        <p>{FOOTER_DATA.tagline}</p>
      </div>

      {/* RIGHT COLUMNS */}
      <div className="footer-columns">
        {FOOTER_DATA.columns.map((col, index) => (
          <FooterColumn key={index} {...col} />
        ))}
      </div>

    </footer>
  );
};

export default Footer;