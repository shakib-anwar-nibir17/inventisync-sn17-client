import { useForm } from "react-hook-form";
import image from "../../assets/signup.png";
import { Link } from "react-router-dom";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
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
    } catch (error) {
      console.error("Error during image upload:", error);
    }
  };
  return (
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
              value="Login"
            />
          </div>
          <p className="text-black mt-4 text-center ">
            Do not have an Account?
            <Link to="/login">
              <span className="font-bold ml-2 text-custom-main2">
                Register Here
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
