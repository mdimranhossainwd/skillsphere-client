import Coursebg from "../components/Course/Coursebg";
import Partner from "../components/Partner";
import Banner from "../components/banner/Banner";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Partner />
      <Coursebg />
      <Footer />
    </div>
  );
};

export default MainLayout;
