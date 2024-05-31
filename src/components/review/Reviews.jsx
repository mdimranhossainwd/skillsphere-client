import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

const Reviews = () => {
  const [card, setIsCard] = useState([]);

  useEffect(() => {
    fetch("../../../public/data/section.json")
      .then((res) => res.json())
      .then((data) => setIsCard(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2520, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
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
    <div className=" bg-[#F7F9FA] py-12 mt-12">
      <div className="container mx-auto">
        <h4 className="text-xl text-center md:text-left font-bold">
          How learners like you are achieving their goals
        </h4>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          infinite={true}
        >
          {card.map((item) => (
            <div key={item._id} className="flex-grow mx-2 my-10 bg-white">
              <div className="border px-4 py-6 flex flex-col h-full">
                <svg
                  className="w-4 h-4 text-gray-400 dark:text-gray-600 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote className="flex-grow">
                  <p>{item.description}</p>
                </blockquote>
                <div className="flex items-center mt-4">
                  <div className="bg-[#34B4F4] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                    {item.initials}
                  </div>
                  <span className="ml-2 font-bold">{item.name}</span>
                </div>
                <hr className="my-4" />
                <a
                  href={item.course_Name}
                  className="text-purple-700 hover:text-black font-bold flex items-center"
                >
                  <svg
                    className="w-6 h-6 mr-1"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14.93A6.93 6.93 0 1 1 8 1.07a6.93 6.93 0 0 1 0 13.86ZM6.91 5.5v5l4.64-2.5Z" />
                  </svg>
                  {item.course_Name}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
