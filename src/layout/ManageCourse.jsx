import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const ManageCourse = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState("");
  const axios = useAxios();

  //   Get All-Courses Data
  // const getData = async () => {
  //   const { data } = await axios.get("/created-all-course");
  //   return data;
  // };

  //   Get All-Courses Data
  const { data: getDataInfo, refetch } = useQuery({
    queryKey: ["getDataInfo", currentPage, itemsPerPage, filter],
    queryFn: async () => {
      const { data } = await axios.get(
        `/created-all-course?pages=${currentPage}&size=${itemsPerPage}}`
      );
      return data;
    },
  });

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(`/products-count`);
      setCount(data.count);
    };
    getCount();
  }, []);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map(
    (elements) => elements + 1
  );

  console.log(getDataInfo);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div>
        <h2 className="text-4xl font-arima pt-10 text-center font-bold">
          All Courses
        </h2>
        <div className="px-2 md:px-5 mt-7">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-secondary via-green-400 to-primary text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]"></th>
                <th className="py-[10px]">Course Name</th>
                <th className="py-[10px]">Instructor</th>
                <th className="py-[10px]">Category</th>
                <th className="py-[10px]">Status</th>
                <th className="py-[10px]">Price</th>
                <th className="py-[10px]">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center ">
              {getDataInfo?.map((item, index) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 flex font-medium justify-between text-center">
                    {index + 1}. {item?.transId}
                  </td>
                  <td className="px-4 py-2 font-medium">{item?.title}</td>
                  <td className="px-4 py-2 font-medium">{item?.instructor}</td>
                  <td className="px-4 py-2 font-medium">{item?.category}</td>
                  <td
                    className={`badge  font-medium ${
                      item.status === "Accepted" &&
                      "bg-emerald-100/60 text-emerald-500 -mt-4"
                    } ${
                      item.status === "Pending" &&
                      "bg-blue-100/60 text-blue-500 -mt-[10px]"
                    } ${
                      item.status === "Rejected" &&
                      "bg-red-100/60 text-red-500 -mt-4"
                    }`}
                  >
                    {item.status === "Accepted"
                      ? "Active"
                      : item.status === "Rejected"
                      ? "Inactive"
                      : item.status}
                  </td>

                  <td className="px-4 py-2 font-medium">{item?.price}</td>
                  <td className="flex gap-4 items-center justify-center">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-x"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline  hover:bg-blue-600 hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-600 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageCourse;
