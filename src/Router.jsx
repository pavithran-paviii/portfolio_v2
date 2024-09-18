import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import MainLayout from "./layout/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout child={<Home />} />} />
        <Route path="/info" element={<MainLayout child={<Info />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
