import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5751d4]" : "")}
        to="profile"
      >
        Manage-Courses
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="add-product"
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
