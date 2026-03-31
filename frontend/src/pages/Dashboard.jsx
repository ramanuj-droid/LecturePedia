import React from "react";
import SidebarSection from "../sections/SidebarSection";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarSection />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Dashboard Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;