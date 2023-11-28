import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useShop = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: shops } = useQuery({
    queryKey: ["shops", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/shops?email=${user.email}`);
        return res.data[0];
      }
    },
  });
  return [shops, refetch];
};

export default useShop;
