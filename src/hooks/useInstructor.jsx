import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
const useCourse = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const { refetch, data: instructor = [] } = useQuery({
    queryKey: ["instructor", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `/instructor-own-course?email=${user?.email}`
      );
      return data;
    },
  });
  return [instructor, refetch];
};

export default useCourse;
