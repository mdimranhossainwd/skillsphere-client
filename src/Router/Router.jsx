import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/form/SignIn";
import SignUp from "../components/form/SignUp";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
