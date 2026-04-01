import React from "react";
import { CONTACT_FEEDBACK } from "../../constants/contact";
import ContactInput from "../molecules/ContactInput";
import ContactTextarea from "../molecules/ContactTextarea";

const ContactFeedbackContent = () => {
  return (
    <div className="contact-feedback-content">
      <div className="header">
        <h2>{CONTACT_FEEDBACK.title}</h2>
        <p>{CONTACT_FEEDBACK.subtitle}</p>
      </div>

      <form className="feedback-form">
        <ContactInput label="Your Name" name="name" />
        <ContactInput label="Your Email" type="email" name="email" />
        <ContactTextarea label="Your Message" name="message" />

        <button type="submit" className="feedback-btn">
          {CONTACT_FEEDBACK.buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactFeedbackContent;