import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function RootLayout() {
  return (
    <div style={{ backgroundColor: "rgba(12, 14, 18, 1)", color: "white" }}>
      {/* <Header /> */}
      <Outlet />
    </div>
  );
}

export default RootLayout;
