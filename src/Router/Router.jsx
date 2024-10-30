import { createBrowserRouter } from "react-router-dom";
import DashboardProfile from "../components/dashboard/DashboardProfile";
import MyClassPage from "../components/dashboard/pages/MyClassPage";
import SignIn from "../components/form/SignIn";
import SignUp from "../components/form/SignUp";
import MainContentSections from "../components/menu/MainContentSections";
import AllClassPage from "../layout/AllClassPage";
import CourseDetailsPage from "../layout/CourseDetailsPage";
import DashboardPage from "../layout/DashboardPage";
import HomePageLayout from "../layout/HomePageLayout";
import MainLayout from "../layout/MainLayout";
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
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard",
        element: <MainContentSections />,
      },
      {
        path: "myclass",
        element: <MyClassPage />,
      },
      {
        path: "profile",
        element: <DashboardProfile />,
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
