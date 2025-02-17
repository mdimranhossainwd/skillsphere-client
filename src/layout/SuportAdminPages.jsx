const SuportAdminPages = () => {
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
                  <th className="py-3 px-4 text-left">Student Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Issue Type</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {requests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4">{req.studentName}</td>
                    <td className="py-3 px-4">{req.email}</td>
                    <td className="py-3 px-4">{req.issueType}</td>
                    <td className="py-3 px-4">{req.description}</td>
                    <td className="py-3 px-4">{req.courseName || "N/A"}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded text-white text-sm ${
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
                    <td className="py-3 px-4">{req.date}</td>
                    <td className="py-3 px-4 space-x-2">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        // onClick={() => updateStatus(req.id, "In Progress")}
                      >
                        In Progress
                      </button>
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        // onClick={() => updateStatus(req.id, "Resolved")}
                      >
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuportAdminPages;
