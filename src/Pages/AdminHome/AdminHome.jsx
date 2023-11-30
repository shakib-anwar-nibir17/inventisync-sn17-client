import { useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text) {
            Swal.fire({
              title: "NOTICE HAS BEEN SENT",
              icon: "success",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
                    <button
                      onClick={() =>
                        document.getElementById(shop._id).showModal()
                      }
                      className="btn btn-error"
                    >
                      Send
                    </button>
                    <dialog id={shop._id} className="modal">
                      <div className="modal-box">
                        <form ref={form} method="dialog">
                          <label>Name</label>
                          <input
                            className="input input-bordered w-full"
                            type="text"
                            defaultValue={shop.name}
                            name="user_name"
                          />
                          <label>Email</label>
                          <input
                            className="input input-bordered w-full"
                            type="email"
                            defaultValue={shop.email}
                            name="user_email"
                          />
                          <label>Message</label>
                          <textarea
                            className="input input-bordered w-full
                          "
                            name="message"
                          />
                          <input
                            onClick={sendEmail}
                            className="btn btn-success"
                            type="submit"
                            value="Send"
                          />
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                      </div>
                    </dialog>
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
