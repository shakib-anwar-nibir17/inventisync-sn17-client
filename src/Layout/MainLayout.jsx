import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-custom">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
