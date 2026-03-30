import React from "react";

const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <div className="menu-toggle" onClick={toggle}>
      ☰
    </div>
  );
};

export default MenuToggle;