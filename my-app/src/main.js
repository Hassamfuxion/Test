import React from "react";
import { Outlet } from "react-router-dom";  // Import Outlet for child routes

const Main = () => {
  return (
    <div>
      <Outlet />  {/* Render child routes here */}
    </div>
  );
}

export default Main;
