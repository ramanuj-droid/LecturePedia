import React from "react";

const NavLink = ({ label, path }) => {
  return (
    <a href={path} className="nav-link">
      {label}
    </a>
  );
};

export default NavLink;