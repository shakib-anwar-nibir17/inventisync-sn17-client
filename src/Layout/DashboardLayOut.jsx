import { Outlet } from "react-router-dom";
import ManagerDashMenu from "../Pages/DashBoard/ManagerDashMenu/ManagerDashMenu";
import Footer from "../Shared/Footer/Footer";
import useManager from "../Hooks/useManager";
import useAdmin from "../Hooks/useAdmin";
import AdminDashMenu from "../Pages/AdminDashMenu/AdminDashMenu";

const Dashboard = () => {
  const [isManager] = useManager();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="flex">
        <div className="w-[336px] pr-4 bg-custom-main2 min-h-screen">
          <div className="text-3xl  uppercase mb-16">
            <h1 className="font-extrabold text-center">InventiSync</h1>
          </div>
          <div>
            {isManager && <ManagerDashMenu></ManagerDashMenu>}
            {isAdmin && <AdminDashMenu></AdminDashMenu>}
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
