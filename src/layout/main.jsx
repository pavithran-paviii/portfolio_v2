import React from "react";
import Navbar from "../components/navbar";

const MainLayout = ({ child }) => {
  return (
    <div>
      <Navbar />
      <div>{child}</div>
    </div>
  );
};

export default MainLayout;
