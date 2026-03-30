import React from "react";
import NavLink from "../atoms/NavLink";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <NavLink key={index} {...link} />
      ))}
    </nav>
  );
};

export default Navbar;