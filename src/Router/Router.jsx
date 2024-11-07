import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/form/SignIn";
import SignUp from "../components/form/SignUp";
import AllClassPage from "../layout/AllClassPage";
import CourseDetailsPage from "../layout/CourseDetailsPage";
import DashboardLayout from "../layout/DashboardLayout";
import HomePageLayout from "../layout/HomePageLayout";
import MainLayout from "../layout/MainLayout";
import MyCartPages from "../layout/MyCartPages";
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
