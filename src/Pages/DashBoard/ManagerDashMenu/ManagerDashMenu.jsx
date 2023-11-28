import { NavLink } from "react-router-dom";
import useClient from "../../../Hooks/useClient";
import useAuth from "../../../Hooks/useAuth";

const ManagerDashMenu = () => {
  const { logout } = useAuth();
  const [client] = useClient();

  //---------logout btn
  const handleLogout = () => {
    logout()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <div className="w-[80px] h-[80] mx-auto">
        <img src={client?.shop_logo} alt="" />
      </div>

      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/dashboard/manager-home"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          MANAGER HOME
        </NavLink>
      </li>

      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/dashboard/sales-collection"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          SALES COLLECTION
        </NavLink>
      </li>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/dashboard/sales-summary"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          SALES SUMMARY
        </NavLink>
      </li>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink to="/login">
          <button onClick={handleLogout}>LOGOUT</button>
        </NavLink>
      </li>

      <div className="pt-2 pb-6">
        <hr className="border-2 border-custom-main" />
      </div>
    </>
  );
  return (
    <div>
      <ul className="font-medium text-xl space-y-6 pl-4">{navLinks}</ul>
    </div>
  );
};

export default ManagerDashMenu;
