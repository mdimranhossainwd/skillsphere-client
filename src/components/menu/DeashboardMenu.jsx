import { Link, NavLink } from "react-router-dom";

const DeashboardMenu = () => {
  const dashmenu = (
    <div className=" gap-5 grid grid-cols-1 ">
      <NavLink to="/" className="flex items-center gap-4 text-lg font-semibold">
        Home
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        Menu
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        Shop
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        Contact
      </NavLink>
    </div>
  );

  return (
    <div className="w-64 min-h-screen bg-[#76c893] text-lg text-white">
      <Link>
        <img
          className="w-40 mx-auto"
          src="https://storage.k-paas.org/file/786a520112e04d4082654c44d33863e6.png"
          alt=""
        />
        <hr />
      </Link>

      <ul className="menu p-4 gap-6 w-80 text-white font-medium min-h-full">
        {/* Sidebar content here */}
        {dashmenu}
      </ul>
    </div>
  );
};

export default DeashboardMenu;
