import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5751d4]" : "")}
        to="profile"
      >
        My Profile
      </NavLink>

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
        Certificate
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="my-product"
      >
        Wishlists
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="review-queue"
      >
        Support
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

export default UserMenu;
