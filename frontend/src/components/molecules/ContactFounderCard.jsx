import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactFounderCard = ({
  name,
  role,
  image,
  email,
  phone,
  linkedin,
  github,
}) => {
  return (
    <div className="contact-founder-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p className="role">{role}</p>

      <div className="details">
        <p><FaEnvelope /> {email}</p>
        <p><FaPhone /> {phone}</p>
      </div>

      <div className="socials">
        <a href={linkedin} target="_blank"><FaLinkedin /></a>
        <a href={github} target="_blank"><FaGithub /></a>
      </div>
    </div>
  );
};

export default ContactFounderCard;