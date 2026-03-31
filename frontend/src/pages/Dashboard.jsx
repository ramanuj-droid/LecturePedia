import React from "react";
import SidebarSection from "../sections/SidebarSection";
import DashboardFeatureSection from "../sections/DashboardFeatureSection";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarSection />

      <div style={{ flex: 1, padding: "30px" }}>
        <DashboardFeatureSection />
      </div>
    </div>
  );
};

export default Dashboard;