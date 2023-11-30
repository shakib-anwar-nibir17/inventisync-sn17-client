import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://inventory-management-server-seven.vercel.app",
}); //creating instance

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
