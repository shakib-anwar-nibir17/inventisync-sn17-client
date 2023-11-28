import { Outlet } from "react-router-dom";
import ManagerDashMenu from "../Pages/DashBoard/ManagerDashMenu/ManagerDashMenu";
import Footer from "../Shared/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[336px] pr-4 bg-custom-main2 min-h-screen">
          <div className="text-3xl  uppercase mb-16">
            <h1 className="font-extrabold text-center">InventiSync</h1>
          </div>
          <div>
            <ManagerDashMenu></ManagerDashMenu>
          </div>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
