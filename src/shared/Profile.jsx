import CourseActivityCharts from "../components/chart/CourseActivityCharts";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Profile = () => {
  const { user } = useAuth();
  const axios = useAxios();
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold ">Course Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <div className="bg-[#D8F2EE] p-8 rounded-xl border border-[#D8F2EE] flex items-center gap-5">
            <div>
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
                className="lucide lucide-scroll-text"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">10</h2>
              <span className="font-medium text-sm">Total Course</span>
            </div>
          </div>
          <div className="bg-[#E4DFFE] p-8 rounded-xl border border-[#E4DFFE] flex items-center gap-5">
            <div>
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
                className="lucide lucide-briefcase-business"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">4</h2>
              <span className="font-medium text-sm">Total Workshops</span>
            </div>
          </div>
          <div className="bg-[#FEE4CD] p-8 rounded-xl border border-[#FEE4CD] flex items-center gap-5">
            <div>
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
                className="lucide lucide-square-parking-off"
              >
                <path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
                <path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
                <path d="m2 2 20 20" />
                <path d="M13 13a3 3 0 1 0 0-6H9v2" />
                <path d="M9 17v-2.3" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">5/6</h2>
              <span className="font-medium text-sm">Avarage Quiz Score</span>
            </div>
          </div>
          <div className="bg-[#CCEBFE] p-8 rounded-xl border border-[#CCEBFE] flex items-center gap-5">
            <div>
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
                className="lucide lucide-ticket-check"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">1</h2>
              <span className="font-medium text-sm">Total Certificate</span>
            </div>
          </div>
        </div>
        <div>
          <CourseActivityCharts />
        </div>
      </div>
    </>
  );
};

export default Profile;
