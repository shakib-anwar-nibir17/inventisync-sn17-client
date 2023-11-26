import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import ManagerDashMenu from "../Pages/DashBoard/ManagerDashMenu/ManagerDashMenu";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>InventiSync | Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="w-[336px] pr-4 bg-custom-main2 min-h-screen">
          <div className="text-3xl  uppercase mb-16">
            <h1 className="font-extrabold text-center">InventiSync</h1>
          </div>
          <div>
            <ManagerDashMenu></ManagerDashMenu>
          </div>
        </div>
        <div className="flex-1 bg-[#F6F6F6]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
