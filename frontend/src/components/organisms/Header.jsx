import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import MenuToggle from "../atoms/MenuToggle";
import { HEADER_DATA } from "../../constants/header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Logo text={HEADER_DATA.logo} />

      <div className="desktop-nav">
        <Navbar links={HEADER_DATA.navLinks} />
      </div>

      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />

      {isOpen && (
        <div className="mobile-nav">
          <Navbar links={HEADER_DATA.navLinks} />
        </div>
      )}
    </header>
  );
};

export default Header;