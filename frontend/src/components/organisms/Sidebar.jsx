import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarMenu from "../molecules/SidebarMenu";
import SidebarItem from "../atoms/SidebarItem";
import { SIDEBAR_ITEMS, LOGOUT_ITEM } from "../../constants/sidebar";
import { api } from "../../api/api";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔐 Logout
  const handleLogout = async () => {
    await api.logout();
    window.location.href = "/auth";
  };

  // ✅ ADD NAVIGATION LOGIC HERE
  const itemsWithActions = SIDEBAR_ITEMS.map((item) => ({
    ...item,
    onClick: () => navigate(item.path),   // 🔥 THIS FIXES IT
    isActive: location.pathname === item.path
  }));

  return (
    <aside className="sidebar">
      
      {/* Logo */}
      <div className="sidebar-logo">LearnX</div>

      {/* Menu */}
      <SidebarMenu items={itemsWithActions} /> {/* ✅ USE UPDATED ITEMS */}

      {/* Logout */}
      <div className="sidebar-logout">
        <SidebarItem {...LOGOUT_ITEM} onClick={handleLogout} />
      </div>

    </aside>
  );
};

export default Sidebar;