import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCourse from "../hooks/useCourse";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [course] = useCourse();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5C53FE]" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5C53FE]" : "")}
        to="/allclass"
      >
        All Class
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5C53FE]" : "")}
        to="/shop"
      >
        My Class
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5C53FE]" : "")}
        to="/shop"
      ></NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#5C53FE]" : "")}
        to="/cart"
      >
        <div className="relative inline-block">
          {/* Heart Icon */}
          <div className="bg-white rounded-full p-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>

          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold text-white bg-black rounded-full">
            {course.length}
          </span>
        </div>
      </NavLink>

      {!user && (
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#5C53FE]" : "")}
          to="/signin"
        >
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar py-2 flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" mr-28 md:mr-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-md gap-2 font-bold w-52"
            >
              {navItem}
            </ul>
          </div>
          <h3 className="text-xl text-[#5C53FE] font-bold">SkillSphere</h3>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center text-black text-[16px] gap-5 font-arima font-semibold">
            {navItem}
          </ul>
        </div>

        <>
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end ml-28 ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] rounded-md p-2 text-white menu dropdown-content bg-[#3b4655]"
                >
                  <div className="px-5 border-b pb-2">
                    <h4 className="font-bold text-md">{user?.displayName}</h4>
                    <p className="text-[12px]">{user?.email}</p>
                  </div>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-[#5C53FE]" : ""
                      }
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>

                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
