import { createBrowserRouter } from "react-router-dom";
import CreateCourseForm from "../components/form/CreateCourseForm";
import SignIn from "../components/form/SignIn";
import SignUp from "../components/form/SignUp";
import AllClassPage from "../layout/AllClassPage";
import AllUsersPage from "../layout/AllUsersPage";
import CourseDetailsPage from "../layout/CourseDetailsPage";
import DashboardLayout from "../layout/DashboardLayout";
import HomePageLayout from "../layout/HomePageLayout";
import InstructorCoursePage from "../layout/InstructorCoursePage";
import MainLayout from "../layout/MainLayout";
import MyCartPages from "../layout/MyCartPages";
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
            `http://localhost:5000/skillsphere/api/v1/courses/${params.id}`
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
      // Instructor All Routes
      {
        path: "create-course",
        element: <CreateCourseForm />,
      },

      {
        path: "my-created-course",
        element: <InstructorCoursePage />,
      },

      // Admin All Routes
      {
        path: "manage-user",
        element: <AllUsersPage />,
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
