import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="manage-courses"
      >
        Manage-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary " : "")}
        to="manage-user"
      >
        Manage-User's
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="approve-courses"
      >
        Approve-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="my-product"
      >
        Reports
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="support-request"
      >
        Support Requests
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="payment"
      >
        Account-Setting
      </NavLink>
    </>
  );
};

export default AdminMenu;
