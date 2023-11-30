import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/inventory2.png";
import defaultUserPic from "../../assets/profile.png";
import useAuth from "../../Hooks/useAuth";
import useManager from "../../Hooks/useManager";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const [isManager] = useManager();
  const [isAdmin] = useAdmin();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black lg:p-4 border-2 border-black"
              : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      {isManager && (
        <>
          <li>
            <NavLink
              to="/dashboard/manager-home"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black lg:p-4 border-2 border-black"
                  : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
              }
            >
              DASHBOARD
            </NavLink>
          </li>
        </>
      )}
      {isAdmin && (
        <>
          <li>
            <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black lg:p-4 border-2 border-black"
                  : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
              }
            >
              ADMIN DASHBOARD
            </NavLink>
          </li>
        </>
      )}
      {!user?.email && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black lg:p-4 border-2 border-black"
                  : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
              }
            >
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black lg:p-4 border-2 border-black"
                  : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
              }
            >
              REGISTER
            </NavLink>
          </li>
        </>
      )}
      {user?.email || isManager ? (
        <li>
          <NavLink
            to="/create-shop"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black lg:p-4 border-2 border-black"
                : "border-2 border-black hover:bg-black lg:p-4 hover:text-white"
            }
          >
            CREATE SHOP
          </NavLink>
        </li>
      ) : null}
      <li>
        <Link
          to="https://youtu.be/rgZU5pDf6mw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 border-1 border-custom-main bg-custom-main text-black font-bold">
            WATCH DEMO
          </button>
        </Link>
      </li>
      <div>
        {user?.email && (
          <button
            onClick={handleLogout}
            className="p-4 bg-custom-main2 text-white font-white"
          >
            Log Out
          </button>
        )}
      </div>
      <div>
        {user?.email && <p className="underline">{user.displayName}</p>}
      </div>
      <div className="h-[50px] w-[55px] rounded-full border-2 border-black">
        {user?.photoURL ? (
          <img
            className="h-full w-full rounded-full"
            src={user.photoURL}
            alt="user-pic"
          />
        ) : (
          <img
            className="h-full w-full rounded-full"
            src={defaultUserPic}
            alt="user-pic"
          />
        )}
      </div>
    </>
  );
  return (
    <div className="navbar justify-between text-white lg:text-black bg-white shadow-lg">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn text-black btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="text-left gap-2 flex items-center">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
          <h2 className="text-3xl font-extrabold">InventiSync</h2>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-4 px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
