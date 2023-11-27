import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosManager from "./useAxiosManager";

const useClient = () => {
  const { user, loading } = useAuth();
  const axiosManager = useAxiosManager();
  const {
    refetch,
    data: client = [],
    isPending: isClientLoading,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosManager.get(
          `http://localhost:5000/users/${user.email}`
        );
        return res.data;
      }
    },
  });

  return [client, refetch, isClientLoading];
};

export default useClient;
