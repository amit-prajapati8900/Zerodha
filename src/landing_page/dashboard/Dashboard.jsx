import React from "react";
import { Outlet } from "react-router-dom";        // ← Yeh add karo

import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Outlet />          {/* ← Yeh line sabse zaroori hai */}
      </div>
    </div>
  );
};

export default Dashboard;