import { useQuery } from "@tanstack/react-query";
import CourseCard from "../components/card/CourseCard";
import useAxios from "../hooks/useAxios";

const NewCourse = () => {
  const axios = useAxios();

  const fetchCourses = async () => {
    const { data } = await axios.get("/accepted-course");
    return data;
  };

  const { data: getCourses, refetch } = useQuery({
    queryKey: ["getCourses"],
    queryFn: fetchCourses,
  });

  console.log(getCourses);

  return (
    <>
      <div>
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold px-3 md:px-0">
            Recommended to you based on ratings
          </h3>

          <div className="grid grid-cols-5 gap-3 -mt-2">
            {getCourses?.map((item) => (
              <CourseCard key={item?._id} course={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCourse;
