import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/allclass"
      >
        All Class
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/shop"
      >
        My Class
      </NavLink>

      {user?.email ? (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
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
          <Link hrefLang="index.html">
            <img
              className="w-36"
              src="https://i.ibb.co/NVf6pJd/Partner-logos-for-homepage-6-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center text-black text-[16px] gap-5 font-bold">
            {navItem}
          </ul>
        </div>

        <>
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end ml-28 md:ml-12">
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
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li>
                    <a>{user?.email}</a>
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
