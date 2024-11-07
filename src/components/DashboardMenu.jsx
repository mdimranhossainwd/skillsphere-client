import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardMenu = () => {
  const { user } = useAuth();

  const menu = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="profile"
      >
        My Profile
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="add-product"
      >
        My Class
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="my-product"
      >
        Certificate
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="review-queue"
      >
        Education
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
        to="payment"
      >
        Payment History
      </NavLink>
    </>
  );

  return (
    <div>
      <aside className="md:w-64 min-h-screen bg-[#3f3f3f] p-4">
        <div className="flex items-center">
          <h3 className="text-2xl text-center flex items-center justify-center font-josefin mt-5 text-[#5C53FE] font-bold ">
            SkillSphere
          </h3>
        </div>
        <div className="divider"></div>

        <nav className="space-y-4 text-white pt-4 items-center justify-center grid grid-cols-1 font-josefin">
          {menu}
        </nav>
      </aside>
    </div>
  );
};

export default DashboardMenu;
