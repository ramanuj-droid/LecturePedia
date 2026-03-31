import React from "react";
import SidebarItem from "../atoms/SidebarItem";

const SidebarMenu = ({ items }) => {
  return (
    <div className="sidebar-menu">
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} />
      ))}
    </div>
  );
};

export default SidebarMenu;