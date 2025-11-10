import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
