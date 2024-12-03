import { useQuery } from "@tanstack/react-query";
import CourseCard from "../components/card/CourseCard";
import useAxios from "../hooks/useAxios";

const AllClassPage = () => {
  const axios = useAxios();
  const getData = async () => {
    const { data } = await axios.get(`/accepted-course`);
    return data;
  };

  const { data: getCourse, refetch } = useQuery({
    queryKey: ["getCourse"],
    queryFn: getData,
  });

  console.log(getCourse);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl font-arima text-center font-bold">
          Here's All Acceptable Courses
        </h2>

        <div className="grid grid-cols-5 gap-4 mt-8">
          {getCourse?.map((item) => (
            <CourseCard key={item?._id} course={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllClassPage;
