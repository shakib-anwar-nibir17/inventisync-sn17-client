import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-custom bg-custom-main2">
      <h2>Hello</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
