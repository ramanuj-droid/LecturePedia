import React from "react";

const SidebarItem = ({ icon: Icon, label, onClick, isActive }) => {
  return (
    <div
      className={`sidebar-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <Icon className="sidebar-icon" />
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;