import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClient = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: client = [],
    isPending: isClientLoading,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(
          `http://localhost:5000/users/${user.email}`
        );
        return res.data;
      }
    },
  });

  return [client, refetch, isClientLoading];
};

export default useClient;
