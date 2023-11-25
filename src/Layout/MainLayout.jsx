import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/NavBar";

const MainLayout = () => {
  return (
    <div className="font-custom">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
