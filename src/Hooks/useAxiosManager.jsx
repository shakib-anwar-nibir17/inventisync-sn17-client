import axios from "axios";

const axiosManager = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosManager = () => {
  return axiosManager;
};

export default useAxiosManager;
