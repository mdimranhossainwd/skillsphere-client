import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useInstructor from "../hooks/useInstructor";

const InstructorCoursePage = () => {
  const axios = useAxios();
  const [instructor, refetch] = useInstructor();

  console.log(instructor);

  // Deleted a course
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/instructor-own-course/${id}`);
      toast.success("This Course Deleted Successfully ");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-4xl font-arima pt-10 text-center font-bold">
          Courses Awaiting Approval
        </h2>
        <div className="px-2 md:px-5 mt-7">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-secondary via-green-400 to-primary text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Course Title</th>
                <th className="py-[10px]">Category</th>
                <th className="py-[10px]">Price</th>
                <th className="py-[10px]">Status</th>
                <th className="py-[10px]">Enrolled Students</th>
                <th className="py-[10px]">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center ">
              {instructor.map((item) => (
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
                      "bg-blue-100/60 text-blue-500 -mt-[19px]"
                    } ${
                      item.status === "Rejected" &&
                      "bg-red-100/60 text-red-500 -mt-4"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="px-4 py-2 font-medium">
                    {item?.enrolled_students}
                  </td>
                  <td className="flex gap-4 items-center justify-center">
                    <button>
                      <Link to={`/update-course/${item._id}`}>
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
                          className="lucide lucide-pencil"
                        >
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </Link>
                    </button>

                    <button onClick={() => handleDelete(item?._id)}>
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
                        className="lucide lucide-trash-2"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
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

export default InstructorCoursePage;
