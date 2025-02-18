import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ReportPages = () => {
  const axios = useAxios();
  const { user } = useAuth();

  console.log(user?.email);

  const getData = async () => {
    const { data } = await axios.get(`/supports?email=${user?.email}`);
    return data;
  };

  const { data: getSupportData, refetch } = useQuery({
    queryKey: ["supportData"],
    queryFn: getData,
  });

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

export default ReportPages;
