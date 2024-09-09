import "./RootLayout.scss";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
