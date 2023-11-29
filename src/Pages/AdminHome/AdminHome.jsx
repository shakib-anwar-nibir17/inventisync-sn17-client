import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  const [allShops, setAllShops] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/admin/shops").then((res) => {
      console.log(res.data);
      setAllShops(res.data);
    });
  }, [axiosSecure]);
  console.log(allShops);
  return (
    <div>
      <Helmet>
        <title>InventiSync | Dashboard Manager</title>
      </Helmet>
      <h2 className="text-4xl px-4">
        Welcome to ADMIN Home
        <span className="text-custom-main2 ml-2">{user?.displayName}</span>
      </h2>
      <div className="bg-white w-[70%] mx-auto p-6">
        <div className="text-3xl font-bold text-center">MANAGE SHOPS</div>
        {/* ______________________________table ________________ */}
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra">
            {/* head */}
            <thead className=" text-white">
              <tr>
                <th className="rounded-tl-xl py-4 bg-custom-main2"></th>
                <th className="py-4 bg-custom-main2">Shop Logo</th>
                <th className="py-4 bg-custom-main2">Shop Name</th>
                <th className="py-4 bg-custom-main2">Product Limit</th>
                <th className="py-4 bg-custom-main2">Shop Description</th>
                <th className="py-4 bg-custom-main2 rounded-tr-xl">
                  SEND NOTICE
                </th>
              </tr>
            </thead>
            <tbody>
              {allShops?.map((shop, index) => (
                <tr key={shop._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-[75px] h-[75px]"
                      src={shop.logo_pic}
                      alt=""
                    />
                  </td>
                  <td>{shop.shop_name}</td>
                  <td>{shop.product_count}</td>
                  <td>{shop.details}</td>

                  <td>
                    <Link to={`/dashboard/update-product/${shop._id}`}>
                      <button className="btn btn-error">Send</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
