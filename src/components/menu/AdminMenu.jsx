import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5751d4]" : "")}
        to="manage-course"
      >
        Manage-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
        to="manage-user"
      >
        Manage-User's
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="my-product"
      >
        Approve-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="my-product"
      >
        Reports
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="review-queue"
      >
        Support Requests
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="payment"
      >
        Account-Setting
      </NavLink>
    </>
  );
};

export default AdminMenu;
