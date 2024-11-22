import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";

const DashboardLayout = () => {
  return (
    <div>
      <div className="lg:flex h-screen overflow-hidden">
        <div className="h-screen bg-[#2C2C2C] fixed ">
          <DashboardMenu />
        </div>
        <div className="md:flex-1 overflow-y-auto ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
