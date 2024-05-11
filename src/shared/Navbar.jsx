import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <Link>Home</Link>
      <Link>All Classes</Link>
      <Link>Tech On</Link>
      <Link>Sign In</Link>
    </>
  );

  return (
    <div>
      <nav className=" ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://i.ibb.co/NVf6pJd/Partner-logos-for-homepage-6-removebg-preview.png"
              className="h-16"
              alt="edusync logo"
            />
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col text-lg font-semibold p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {navItem}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
