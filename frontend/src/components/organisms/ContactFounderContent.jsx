import React from "react";
import { CONTACT_FOUNDERS } from "../../constants/contact";
import ContactFounderCard from "../molecules/ContactFounderCard";

const ContactFounderContent = () => {
  return (
    <div className="contact-founder-content">
      <div className="header">
        <h2>{CONTACT_FOUNDERS.title}</h2>
        <p>{CONTACT_FOUNDERS.subtitle}</p>
      </div>

      <div className="cards">
        {CONTACT_FOUNDERS.founders.map((founder, index) => (
          <ContactFounderCard key={index} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default ContactFounderContent;