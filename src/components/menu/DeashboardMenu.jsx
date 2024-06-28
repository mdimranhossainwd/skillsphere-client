import { FaRegUser } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { GiClassicalKnowledge } from "react-icons/gi";
import { MdLightbulbOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DeashboardMenu = () => {
  const dashmenu = (
    <div className=" gap-5 grid grid-cols-1 pt-5 ">
      <NavLink
        to="myclass"
        className="flex items-center gap-4 text-lg font-semibold"
      >
        <GiClassicalKnowledge /> My Class
      </NavLink>
      <NavLink
        to="profile"
        className="flex items-center gap-4 text-lg font-semibold"
      >
        <FaRegUser /> Profile
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        <MdLightbulbOutline /> Skill
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        <FcDocument /> Experience
      </NavLink>
    </div>
  );

  return (
    <div className=" ">
      <div className="min-h-screen bg-[#170F21] text-lg px-6 pt-12 text-white">
        <div className="text-center space-y-3 pb-6">
          <div className="avatar ">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-5">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="text-md">
            <h3 className="text-2xl font-semibold">Md Imran Hossain</h3>
            <span className="font-bold text-sm">WEB:0000</span>
            <p>mdimranhossain.wd@gmail.com</p>
            <p>+88012345678</p>
          </div>
        </div>
        <hr />
        {/* <Link>
        <img
          className="w-40 mx-auto"
          src="https://storage.k-paas.org/file/786a520112e04d4082654c44d33863e6.png"
          alt=""
        />
        <hr />
      </Link> */}

        <ul className="menu p-4 gap-6 w-80 text-white font-medium min-h-full">
          {/* Sidebar content here */}
          {dashmenu}
        </ul>
      </div>
    </div>
  );
};

export default DeashboardMenu;
