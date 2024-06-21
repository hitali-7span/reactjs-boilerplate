import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import DemoForm from "../demo-form";

function MainLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <div>
            <DemoForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
