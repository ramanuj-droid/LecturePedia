import React from "react";
import SidebarMenu from "../molecules/SidebarMenu";
import SidebarItem from "../atoms/SidebarItem";
import { SIDEBAR_ITEMS, LOGOUT_ITEM } from "../../constants/sidebar";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("Logout clicked"); // later connect API
  };

  return (
    <aside className="sidebar">
      
      {/* Logo */}
      <div className="sidebar-logo">LearnX</div>

      {/* Menu */}
      <SidebarMenu items={SIDEBAR_ITEMS} />

      {/* Logout */}
      <div className="sidebar-logout">
        <SidebarItem {...LOGOUT_ITEM} onClick={handleLogout} />
      </div>

    </aside>
  );
};

export default Sidebar;