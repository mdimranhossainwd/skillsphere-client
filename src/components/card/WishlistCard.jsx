import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const WishlistCard = ({ item, refetch }) => {
  const {
    _id,
    cartId,
    title,
    description,
    instructor,
    price,
    rating,
    total_reviews,
    category,
    image_url,
    language,
    course_level,
    duration,
    enrolled_students,
    curriculum,
    requirements,
    what_you_will_learn,
    detailed_description,
    userName,
    photo,
    email,
    status,
  } = item || {};
  const axios = useAxios();
  const handleDeleted = async (id) => {
    const { data } = await axios.delete(`/carts/${id}`);
    toast.success("Deleted Successfully");
    refetch();
    console.log(data);
  };

  return (
    <>
      <div className="w-full lg:w-full">
        <div className="flex py-5 border-b w-full gap-4">
          {/* Course Image */}
          <img
            src={image_url} // Replace with actual image URL
            alt="Course Thumbnail"
            className="w-40 h-24 object-cover mt-2"
          />

          {/* Course Details */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg w-4/5 font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">
              By Dr. Angela Yu, Developer and Lead Instructor
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500 font-bold text-sm">
                {rating}
              </span>
              <span className="text-gray-600 text-sm">
                ({enrolled_students})
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {duration} total hours • 592 lectures • {course_level}
            </p>
          </div>

          {/* Price Details */}
          <div className="flex gap-5 md:ml-4">
            <NavLink>
              <button onClick={() => handleDeleted(_id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide w-5 mt-1 lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </button>
            </NavLink>
            <p className="text-xl font-semibold text-[#5C53FE]">
              ${item?.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
