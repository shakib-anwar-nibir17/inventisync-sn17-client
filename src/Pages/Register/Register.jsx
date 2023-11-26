import { useForm } from "react-hook-form";
import image from "../../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxiosManager from "../../Hooks/useAxiosManager";
import Swal from "sweetalert2";
import useClient from "../../Hooks/useClient";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [refetch] = useClient();
  const navigate = useNavigate();
  const { createUser, handleUpdateProfile } = useAuth();
  const axiosManager = useAxiosManager();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const imageFile = new FormData();
      imageFile.append("image", data.image[0]);
      const response = await axios.post(image_hosting_url, imageFile);
      console.log(response.data);
      const image = response.data.data.display_url;
      console.log(image);
      if (response.data.success) {
        createUser(data.email, data.password)
          .then((res) => {
            console.log(res);
            handleUpdateProfile(data.name, image)
              .then(() => {
                const userInfo = {
                  name: data.name,
                  email: data.email,
                };
                axiosManager.post("/users", userInfo).then((res) => {
                  console.log(res.data);
                  if (res.data.insertedId) {
                    Swal.fire({
                      title: "Congrats",
                      text: "Your Registration complete",
                      icon: "success",
                    });
                  }
                });
                navigate("/create-shop");
                refetch();
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.error("Error during image upload:", error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>InventiSync | REGISTRATION PAGE</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <div className="lg:w-1/2">
          <img className="w-[75%] mx-auto" src={image} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="lg:w-2/3 text-4xl font-bold text-center">
            PLEASE REGISTER !!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/3 mt-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-600 mt-4">First name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600 mt-4">email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                placeholder="password"
                className="input input-bordered "
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-4">Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 mt-4">
                  Invalid Format. Password must contain one uppercase, one
                  lowercase, one special character and single digit
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Upload Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full border-custom-main2"
              />
              {errors.image && (
                <p className="text-red-600 mt-4">File is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-custom-main2 text-white font-semibold hover:bg-custom-main2"
                type="submit"
                value="Register"
              />
            </div>
            <p className="text-black mt-4 text-center ">
              Already have an Account?
              <Link to="/login">
                <span className="font-bold ml-2 text-custom-main2">
                  Login Here
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
