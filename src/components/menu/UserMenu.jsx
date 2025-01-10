import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="profile"
      >
        My Profile
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="my-course"
      >
        My-Enroll Class
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="my-product"
      >
        Certificate
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="wishlist"
      >
        Wishlists
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
        to="review-queue"
      >
        Support
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

export default UserMenu;
