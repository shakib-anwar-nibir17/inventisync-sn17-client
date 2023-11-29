import { NavLink } from "react-router-dom";

const AdminDashMenu = () => {
  const navLinks = (
    <>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          ADMIN HOME
        </NavLink>
      </li>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/dashboard/admin-summary"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          ADMIN SALE SUMMARY
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
          <button>LOGOUT</button>
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

export default AdminDashMenu;
