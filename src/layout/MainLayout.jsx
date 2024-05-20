import Partner from "../components/Partner";
import Banner from "../components/banner/Banner";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Partner />
    </div>
  );
};

export default MainLayout;
