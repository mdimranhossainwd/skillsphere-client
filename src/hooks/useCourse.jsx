import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
const useCourse = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const { refetch, data: course = [] } = useQuery({
    queryKey: ["course", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/carts?email=${user?.email}`);
      return data;
    },
  });
  return [course, refetch];
};

export default useCourse;
