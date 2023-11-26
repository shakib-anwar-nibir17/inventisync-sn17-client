import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosManager from "./useAxiosManager";

const useClient = () => {
  const { user } = useAuth();
  const axiosManager = useAxiosManager();
  const { refetch, data: client = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosManager.get(
        `http://localhost:5000/users/${user.email}`
      );
      return res.data;
    },
  });

  return [client, refetch];
};

export default useClient;