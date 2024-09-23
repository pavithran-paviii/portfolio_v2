import React from "react";
import Navbar from "../components/navbar";

const MainLayout = ({ child }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div>{child}</div>
    </div>
  );
};

export default MainLayout;
