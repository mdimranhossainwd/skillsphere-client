import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useCourse from "../hooks/useCourse";
import Modal from "../shared/Modal";

const MyCartPages = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [course, refetch] = useCourse();
  const axios = useAxios();
  console.log(course);
  const totalCost = course.reduce((acc, cur) => acc + cur.price, 0);

  const handleDeleted = async (id) => {
    const { data } = await axios.delete(`/carts/${id}`);
    toast.success("Deleted Successfully");
    refetch();
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <div className="border-t">
        <h2 className="text-4xl py-6 font-bold">Shopping Cart</h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-8 p-8  bg-white ">
        {/* Left Side - Course Info */}

        <div className="">
          <h2 className="text-lg border-b pb-1 font-bold">
            {course.length} Course in Cart
          </h2>

          {course?.map((item) => (
            <div key={item?._id} className="w-full lg:w-full">
              <div className="flex py-5 border-b w-full gap-4">
                {/* Course Image */}
                <img
                  src={item?.image_url} // Replace with actual image URL
                  alt="Course Thumbnail"
                  className="w-40 h-24 object-cover mt-2"
                />

                {/* Course Details */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg w-4/5 font-semibold">{item?.title}</h3>
                  <p className="text-sm text-gray-600">
                    By Dr. Angela Yu, Developer and Lead Instructor
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-yellow-500 font-bold text-sm">
                      {item?.rating}
                    </span>
                    <span className="text-gray-600 text-sm">
                      ({item?.enrolled_students})
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {item?.duration} total hours • 592 lectures •{" "}
                    {item?.course_level}
                  </p>
                </div>

                {/* Price Details */}
                <div className="flex gap-5 md:ml-4">
                  <NavLink>
                    <button onClick={() => handleDeleted(item?._id)}>
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
          ))}
        </div>

        {/* Right Side - Total and Coupon */}
        <div className="w-full lg:w-1/3 md:ml-16  p-6 rounded-md">
          <h2 className="text-lg font-semibold">Total:</h2>
          <p className="text-2xl font-bold text-black mt-2">
            {totalCost.toFixed(2)}
          </p>
          <p className="text-gray-500 text-sm line-through">$74.99</p>
          <p className="text-green-600 text-sm">83% off</p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-blue-600 font-semibold text-white py-2 rounded-md mt-4 hover:bg-[#5C53FE]"
          >
            Checkout
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Promotions</h3>
            <div className="flex items-center justify-between mt-2 bg-white border rounded p-2">
              <span className="text-gray-700">ST6MT103124 is applied</span>
              <button className="text-gray-500 hover:text-red-600">✕</button>
            </div>

            <div className="mt-3 flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Enter Coupon"
                className="w-full p-2 outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 hover:bg-[#5C53FE]">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPages;
