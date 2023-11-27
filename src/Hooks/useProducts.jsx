import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data } = useQuery({
    queryKey: ["shop", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/products?email=${user.email}`);
        return res.data;
      }
    },
  });
  const products = Array.isArray(data) ? data : [];
  return [products, refetch];
};

export default useProducts;
