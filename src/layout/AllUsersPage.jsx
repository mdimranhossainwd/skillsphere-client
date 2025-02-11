import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import RoleModal from "../ui/RoleModal";

const AllUsersPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState("");
  const axios = useAxios();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { data: getUserInfo, refetch } = useQuery({
    queryKey: ["getUserInfo", currentPage, itemsPerPage, filter],
    queryFn: async () => {
      const { data } = await axios.get(
        `/users?pages=${currentPage}&size=${itemsPerPage}}`
      );
      return data;
    },
  });

  console.log(getUserInfo);

  const handleOpenModal = (user) => {
    console.log(user);

    setSelectedUser(user);
    setIsOpen(true);
  };

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(`/users-count`);
      setCount(data.count);
    };
    getCount();
  }, []);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map(
    (elements) => elements + 1
  );

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div>
        <h2 className="text-4xl font-arima pt-10 text-center font-bold">
          Manage All User's
        </h2>
        <div className="px-3 md:px-6 mt-7">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-secondary via-green-400 to-primary text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Img</th>
                <th className="py-[10px]">Name</th>
                <th className="py-[10px]">Email</th>
                <th className="py-[10px]">Role</th>
                <th className="py-[10px]">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center ">
              {getUserInfo?.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={item?.photo}
                      alt="avatar"
                      className="w-8 h-8 object-cover rounded-full mr-2"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm font-medium">
                    {item?.name}
                  </td>
                  <td className="px-4 py-2 text-sm">{item?.email}</td>
                  <td className="px-4 py-2">
                    <button className=" w-2/3 text-black text-sm font-medium rounded px-4 py-1">
                      {item?.role}
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleOpenModal(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user-x"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="17" x2="22" y1="8" y2="13" />
                        <line x1="22" x2="17" y1="8" y2="13" />
                      </svg>
                    </button>
                  </td>
                  <RoleModal
                    item={selectedUser}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    refetch={refetch}
                  />
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
            className="px-4 py-2 mx-1 transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary disabled:hover:bg-gray-200  hover:text-white disabled:cursor-not-allowed text-white"
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
                currentPage === btnNum
                  ? "bg-gradient-to-r from-secondary via-green-400 to-primary text-white"
                  : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline  hover:bg-secondary hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary disabled:hover:bg-gray-200  hover:text-white disabled:cursor-not-allowed text-white"
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

export default AllUsersPage;
