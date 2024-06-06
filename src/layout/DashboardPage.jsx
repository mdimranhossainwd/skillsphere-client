import { Outlet } from "react-router-dom";
import DeashboardMenu from "../components/menu/DeashboardMenu";

const DashboardPage = () => {
  return (
    <div className="lg:flex">
      <div className="min-h-full">
        <DeashboardMenu />
      </div>
      <div className="md:flex-1 bg-[#ECF0EF]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
