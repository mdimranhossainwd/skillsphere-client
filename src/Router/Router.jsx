import { createBrowserRouter } from "react-router-dom";
import DashboardProfile from "../components/dashboard/DashboardProfile";
import MyClassPage from "../components/dashboard/pages/MyClassPage";
import SignIn from "../components/form/SignIn";
import SignUp from "../components/form/SignUp";
import MainContentSections from "../components/menu/MainContentSections";
import AllClassPage from "../layout/AllClassPage";
import DashboardPage from "../layout/DashboardPage";
import HomePageLayout from "../layout/HomePageLayout";
import MainLayout from "../layout/MainLayout";

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
