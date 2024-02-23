import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialSingUp = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        const userInfo = {
          email: newUser.email,
          name: newUser.displayName,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Success",
              icon: "success",
            });
          })
          .catch((error) => console.log(error));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mt-10">
      <button
        onClick={handleGoogleSignIn}
        className="p-3 border-2 border-black w-full hover:bg-black hover:text-white rounded-lg"
      >
        GOOGLE
      </button>
    </div>
  );
};

export default SocialSingUp;
