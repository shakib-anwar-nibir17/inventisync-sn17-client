import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateShop from "../Pages/CreateShop/CreateShop";
import DashboardLayOut from "../Layout/DashboardLayOut";
import ManagerHome from "../Pages/DashBoard/ManagerHome/ManagerHome";
import AddProducts from "../Pages/AddProducts/AddProducts";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/create-shop",
        element: <CreateShop></CreateShop>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayOut></DashboardLayOut>,
    children: [
      {
        path: "manager-home",
        element: <ManagerHome></ManagerHome>,
      },
      {
        path: "add-products",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);

export default Routes;
