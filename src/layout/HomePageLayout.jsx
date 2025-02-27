import Coursebg from "../components/Course/Coursebg";
import RecommandCourse from "../components/Course/RecommandCourse";
import Partner from "../components/Partner";
import Banner from "../components/banner/Banner";
import BusinessBanner from "../components/banner/BusinessBanner";
import Reviews from "../components/review/Reviews";
import Teacher from "../components/teacher/Teacher";
import NewCourse from "./NewCourse";
const HomePageLayout = () => {
  return (
    <div>
      <Banner />
      <Partner />
      <Coursebg />
      <Reviews />
      <BusinessBanner />
      <RecommandCourse />
      <Teacher />
      <NewCourse />
    </div>
  );
};

export default HomePageLayout;
