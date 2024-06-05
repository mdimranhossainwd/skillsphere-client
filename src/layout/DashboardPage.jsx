import DeashboardMenu from "../components/menu/DeashboardMenu";

const DashboardPage = () => {
  return (
    <div className="lg:flex">
      <div className="min-h-full">
        <DeashboardMenu />
      </div>
      <div className="md:flex-1 bg-[#99d98c]">
        <h3>Dashboard </h3>
      </div>
    </div>
  );
};

export default DashboardPage;
