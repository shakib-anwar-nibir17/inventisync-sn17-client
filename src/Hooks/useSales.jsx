import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSales = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data } = useQuery({
    queryKey: ["sales", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/sales?email=${user.email}`);
        return res.data;
      }
    },
  });
  const sales = Array.isArray(data) ? data : [];
  return [sales, refetch];
};

export default useSales;
