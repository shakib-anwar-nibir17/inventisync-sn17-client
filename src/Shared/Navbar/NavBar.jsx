import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/inventory2.png";
import defaultUserPic from "../../assets/profile.png";

const Navbar = () => {
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
      <li>
        <NavLink
          to="/create-shop"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black lg:p-4 border-2 border-black"
              : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
          }
        >
          CREATE SHOP
        </NavLink>
      </li>
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
        <Link to="/dashboard/cart">
          <button className="flex justify-center items-center">Btn</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className=" text-black underline">Sign In</button>
        </Link>
      </div>
      <div className="h-[50px] w-[55px] rounded-full border-2 border-black">
        <img
          className="h-full w-full rounded-full"
          src={defaultUserPic}
          alt="user-pic"
        />
      </div>
    </>
  );
  return (
    <div className="navbar justify-between text-black bg-white shadow-lg">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
