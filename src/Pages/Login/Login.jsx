import { useForm } from "react-hook-form";
import image from "../../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialSingUp from "../../Components/SocialSignUp/SocialSignUp";

const Login = () => {
  const navigate = useNavigate();
  const { userSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userSignIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Congrats",
          text: "Login Successful",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Helmet>
        <title>InventiSync | LOGIN PAGE</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <div className="lg:w-1/2">
          <img className="w-[75%] mx-auto" src={image} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="lg:w-2/3 text-6xl font-bold text-center">LOGIN !!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/3 mt-6">
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
            <div className="form-control mt-6">
              <input
                className="btn bg-custom-main2 text-white font-semibold hover:bg-custom-main2"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="lg:w-2/3">
            <SocialSingUp></SocialSingUp>
            <p className="text-black mt-4 text-center ">
              Do not have an Account?
              <Link to="/register">
                <span className="font-bold ml-2 text-custom-main2">
                  Register Here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
