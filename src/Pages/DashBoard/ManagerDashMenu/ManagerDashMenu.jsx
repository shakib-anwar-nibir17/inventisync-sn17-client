import { NavLink } from "react-router-dom";
import useClient from "../../../Hooks/useClient";

const ManagerDashMenu = () => {
  const [client] = useClient();
  const shopOwner = client[0];
  const navLinks = (
    <>
      <div className="w-[80px] h-[80] mx-auto">
        <img src={shopOwner?.shop_logo} alt="" />
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
          to="/dashboard/manager-products"
          className={({ isActive }) =>
            isActive ? "text-black  bg-custom-main" : ""
          }
        >
          MANAGER PRODUCT
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
