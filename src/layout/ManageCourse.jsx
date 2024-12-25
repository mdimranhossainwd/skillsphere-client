import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";

const ManageCourse = () => {
  const axios = useAxios();

  //   Get All-Courses Data
  const getData = async () => {
    const { data } = await axios.get("/created-all-course");
    return data;
  };

  //   Get All-Courses Data
  const { data: getDataInfo, refetch } = useQuery({
    queryKey: ["getDataInfo"],
    queryFn: getData,
  });

  console.log(getDataInfo);

  return (
    <>
      <div>
        <h2 className="text-4xl font-arima pt-10 text-center font-bold">
          All Courses
        </h2>
      </div>
    </>
  );
};

export default ManageCourse;
