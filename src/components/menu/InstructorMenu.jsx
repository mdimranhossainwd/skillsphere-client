import { NavLink } from "react-router-dom";

const InstructorMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="add-product"
      >
        My-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="my-product"
      >
        Create-Course
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="my-product"
      >
        Assainments
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="review-queue"
      >
        Review
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="payment"
      >
        Earnings
      </NavLink>
    </>
  );
};

export default InstructorMenu;
