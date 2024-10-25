import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useAxios from "../../hooks/useAxios";
import CourseCard from "../card/CourseCard";

const Coursebg = () => {
  const axios = useAxios();

  const getCourseData = async () => {
    const { data } = await axios.get("/courses");
    return data;
  };

  const { data: getData } = useQuery({
    queryKey: ["getData"],
    queryFn: getCourseData,
  });

  console.log(getData);

  // Responsive Carousel Functions
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2520, min: 1920 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto ">
      <div className="space-y-4 mt-12 mb-6">
        <h2 className="text-4xl pt-6 text-center font-bold">
          A broad selection of courses
        </h2>
        <p className="text-lg font-medium text-center">
          Choose from over 10,000 online video courses with new additions
          published every month
        </p>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        infinite={true}
      >
        {getData?.length > 0 ? (
          getData.map((item) => <CourseCard key={item?._id} course={item} />)
        ) : (
          <p>Loading courses...</p> // This message will be displayed if getData is not yet available.
        )}
      </Carousel>
    </div>
  );
};

export default Coursebg;
