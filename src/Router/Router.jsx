import { createBrowserRouter } from "react-router-dom";
import HealthActivityChart from "../components/chart/HealthActivityChart";
import AddAssignmentForm from "../components/form/AssainmentForm";
import CreateCourseForm from "../components/form/CreateCourseForm";
import SignIn from "../components/form/SignIn";
import SignUp from "../components/form/SignUp";
import AllClassPage from "../layout/AllClassPage";
import AllUsersPage from "../layout/AllUsersPage";
import ApprovedCoursePages from "../layout/ApprovedCoursePages";
import CourseDetailsPage from "../layout/CourseDetailsPage";
import DashboardLayout from "../layout/DashboardLayout";
import HomePageLayout from "../layout/HomePageLayout";
import InstructorCoursePage from "../layout/InstructorCoursePage";
import MainLayout from "../layout/MainLayout";
import ManageCourse from "../layout/ManageCourse";
import MyCartPages from "../layout/MyCartPages";
import MyCourse from "../layout/MyCourse";
import ReportPages from "../layout/ReportPages";
import SuportAdminPages from "../layout/SuportAdminPages";
import SupportPages from "../layout/SupportPages";
import UpdateCoursePages from "../layout/UpdateCoursePages";
import UserPaymentHistory from "../layout/UserPaymentHistory";
import WishlistDashboard from "../layout/WishlistDashboard";
import Profile from "../shared/Profile";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePageLayout />,
      },
      {
        path: "/allclass",
        element: <AllClassPage />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRouter>
            <MyCartPages />
          </PrivateRouter>
        ),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRouter>
            <CourseDetailsPage />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://skillsphere-server-9x2s.onrender.com/skillsphere/api/v1/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-course",
        element: <MyCourse />,
      },
      {
        path: "wishlist",
        element: <WishlistDashboard />,
      },
      {
        path: "payment-history",
        element: <UserPaymentHistory />,
      },
      {
        path: "support",
        element: <SupportPages />,
      },
      {
        path: "report",
        element: <ReportPages />,
      },
      // Instructor All Routes
      {
        path: "create-course",
        element: <CreateCourseForm />,
      },

      {
        path: "my-created-course",
        element: <InstructorCoursePage />,
      },
      {
        path: "add-assainments",
        element: <AddAssignmentForm />,
      },
      {
        path: "update-course/:id",
        element: <UpdateCoursePages />,
      },
      {
        path: "earnings",
        element: <HealthActivityChart />,
      },
      // Admin All Routes
      {
        path: "manage-user",
        element: <AllUsersPage />,
      },
      {
        path: "approve-courses",
        element: <ApprovedCoursePages />,
      },
      {
        path: "manage-courses",
        element: <ManageCourse />,
      },
      {
        path: "support-request",
        element: <SuportAdminPages />,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
