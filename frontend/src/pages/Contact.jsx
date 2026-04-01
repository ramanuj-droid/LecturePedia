import React from "react";
import ContactFounder from "../sections/ContactFounder";
import ContactFeedback from "../sections/ContactFeedback";
import HeaderSection from "../sections/HeaderSection";
import FooterSection from "../sections/FooterSection";

const Contact = () => {
  return (
    <>
      <HeaderSection/>
       <ContactFounder />
       <ContactFeedback/>
      <FooterSection/>
    </>
  );
};

export default Contact;

