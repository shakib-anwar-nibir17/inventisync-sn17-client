import axios from "axios";
import useClient from "../../Hooks/useClient";
import useAxiosManager from "../../Hooks/useAxiosManager";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateShop = () => {
  const { user } = useAuth();
  const [client, refetch] = useClient();
  const axiosManager = useAxiosManager();
  const shopOwner = client[0];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const logo = form.logo.files[0];
    const location = form.location.value;
    const shop_name = form.shop_name.value;
    const details = form.details.value;
    console.log(name, email, logo, location, shop_name, details);
    const imageFile = new FormData();
    imageFile.append("image", logo);
    axios.post(image_hosting_url, imageFile).then((res) => {
      console.log(res.data);
      const logo_pic = res.data.data.display_url;

      if (res.data.success) {
        const shopInfo = {
          name,
          email,
          location,
          logo_pic,
          shop_name,
          details,
          product_count: 3,
        };
        axiosManager
          .post("/shops", shopInfo)
          .then((res) => {
            console.log(res.data);
            const userUpdate = {
              shop_id: res.data.insertedId,
              shop_name,
              shop_logo: logo_pic,
            };
            if (res.data.insertedId) {
              axiosManager
                .put(`/users/${user.email}`, userUpdate)
                .then((res) => {
                  console.log(res.data);
                  if (res.data.modifiedCount > 0) {
                    Swal.fire({
                      title: "Congrats",
                      text: "We have created your shop",
                      icon: "success",
                    });
                  }
                  navigate("/dashboard/manager-home");
                  refetch();
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>InventiSync | CREATE SHOP</title>
      </Helmet>

      <h1 className="text-center mt-10 text-7xl">Welcome to Create Shop</h1>
      <div className="w-3/4 mx-auto shadow-xl px-6 py-6">
        <form onSubmit={handleSubmit}>
          {/* Shop Owner Name*/}
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Owner Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={shopOwner?.name}
                readOnly
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>
            {/* Shop Owner Email */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Owner Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={shopOwner?.email}
                readOnly
                name="email"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Shop Name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Shop name"
                name="shop_name"
                className="input input-bordered w-full"
              />
            </div>
            {/* Shop logo */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Logo*
                </span>
              </label>
              <input
                name="logo"
                type="file"
                className="file-input w-full border-custom-main2"
              />
            </div>
          </div>
          {/* Shop Location */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Location*
              </span>
            </label>
            <input
              type="text"
              placeholder="Shop name"
              name="location"
              className="input input-bordered w-full"
            />
          </div>
          {/* Shop Info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Info*
              </span>
            </label>
            <textarea
              name="details"
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
            <div className="form-control mt-6">
              <input
                className="btn bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white"
                type="submit"
                value="Create Shop"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateShop;
