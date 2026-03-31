import React from "react";

const SidebarItem = ({ icon: Icon, label, onClick }) => {
  return (
    <div className="sidebar-item" onClick={onClick}>
      <Icon className="sidebar-icon" />
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;