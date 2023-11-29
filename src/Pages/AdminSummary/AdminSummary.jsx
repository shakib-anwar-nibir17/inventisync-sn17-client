import { Helmet } from "react-helmet-async";
import useClient from "../../Hooks/useClient";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../SalesSummary/style/style.css";

// import required modules
import { Pagination } from "swiper/modules";

const AdminSummary = () => {
  const [client] = useClient();
  console.log(client);
  const axiosSecure = useAxiosSecure();
  const [allUsers, setAllUsers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allSales, setAllSales] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/users").then((res) => {
      setAllUsers(res.data);
    });
    axiosSecure.get("/admin/products").then((res) => {
      setAllProducts(res.data);
    });
    axiosSecure.get("/admin/sales").then((res) => {
      setAllSales(res.data);
    });
  }, [axiosSecure]);
  console.log(allUsers);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <div>
        <Helmet>
          <title>InventiSync | ADMIN Summary</title>
        </Helmet>
        <h2 className="text-center font-bold text-5xl mt-24 mb-20">
          Sales Summary
        </h2>
        <div className="flex justify-center">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Products</div>
              <div className="stat-value">{allProducts.length}</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Income</div>
              <div className="stat-value">
                {client?.income}
                <small className="text-sm">USD</small>
              </div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Sales</div>
              <div className="stat-value">{allSales.length}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-[70%] mx-auto mt-10 p-6">
            <div className="text-3xl font-bold text-center mb-10">
              MANAGE USERS{" "}
            </div>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper w-[500px] h-[500px] border-2 border-black"
            >
              {allUsers?.map((user) => (
                <SwiperSlide key={user._id}>
                  <div className="flex justify-center mt-10">
                    <div className="card h-[300px] text-black font-bold border-2 border-black">
                      <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>Email:{user.email} GMT+6</p>
                        <p>Shop Name: {user.shop_name}</p>
                        <p>Role: {user.role}</p>
                        {user.shop_name || user.role ? null : (
                          <button className="p-4 bg-custom-main2 text-white">
                            SEND PROMO
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
