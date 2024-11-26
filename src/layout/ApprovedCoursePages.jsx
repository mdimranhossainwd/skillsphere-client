import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";

const ApprovedCoursePages = () => {
  const axios = useAxios();

  //   Get Pending Data
  const getData = async () => {
    const { data } = await axios.get("/pending-course");
    return data;
  };

  const { data: getDataInfo, refetch } = useQuery({
    queryKey: ["getDataInfo"],
    queryFn: getData,
  });
  console.log(getDataInfo);

  return (
    <>
      <div>
        <h2 className="text-4xl font-arima pt-10 text-center font-bold">
          All Pending Courses
        </h2>
        <div className="px-2 md:px-5 mt-7">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-secondary via-green-400 to-primary text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Course Title</th>
                <th className="py-[10px]">Category</th>
                <th className="py-[10px]">Price</th>
                <th className="py-[10px]">Status</th>
                <th className="py-[10px]">Instructor</th>
                <th className="py-[10px]">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center ">
              {getDataInfo?.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 font-medium">{item?.title}</td>
                  <td className="px-4 py-2 font-medium">{item?.category}</td>
                  <td className="px-4 py-2 font-medium">{item?.price}</td>
                  <td
                    className={`badge  font-medium ${
                      item.status === "Accepted" &&
                      "bg-emerald-100/60 text-emerald-500 -mt-4"
                    } ${
                      item.status === "Pending" &&
                      "bg-blue-100/60 text-blue-500 -mt-[14px]"
                    } ${
                      item.status === "Rejected" &&
                      "bg-red-100/60 text-red-500 -mt-4"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="px-4 py-2 font-medium">{item?.instructor}</td>
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
      </div>
    </>
  );
};

export default ApprovedCoursePages;
