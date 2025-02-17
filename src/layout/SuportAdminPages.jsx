import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";

const SuportAdminPages = () => {
  const axios = useAxios();

  // Get all support requests Data
  const getData = async () => {
    const { data } = await axios.get("/support");
    return data;
  };

  const { data: getSupportData } = useQuery({
    queryKey: ["supportData"],
    queryFn: getData,
  });

  console.log(getSupportData);
  return (
    <>
      <div className="my-12">
        <h2 className="text-3xl font-arima text-center font-semibold mb-4">
          All Supports Requests
        </h2>
        <div className="p-6 ">
          <div className="overflow-x-auto">
            <table className="w-full bg-white">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-3 px-4 text-center">Student Name</th>
                  <th className="py-3 px-4 text-center">Email</th>
                  <th className="py-3 px-4 text-center">Issue Type</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Date</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {getSupportData?.map((req) => (
                  <tr key={req._id} className="border-b">
                    <td className="py-3 px-4 text-center">{req.name}</td>
                    <td className="py-3 px-4 text-center">{req.email}</td>
                    <td className="py-3 px-4 text-center">{req.issueType}</td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`px-3 py-1 text-center  badge rounded-full text-white text-sm ${
                          req.status === "Pending"
                            ? "bg-yellow-500"
                            : req.status === "In Progress"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">{req.date}</td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <button>
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
                          className="lucide lucide-pencil-ruler"
                        >
                          <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                          <path d="m8 6 2-2" />
                          <path d="m18 16 2-2" />
                          <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuportAdminPages;
