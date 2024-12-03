import { NavLink } from "react-router-dom";

const InstructorMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="my-created-course"
      >
        My-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="create-course"
      >
        Create-Course
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="add-assainments"
      >
        Assainments
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="review-queue"
      >
        Review
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="payment"
      >
        Earnings
      </NavLink>
    </>
  );
};

export default InstructorMenu;
