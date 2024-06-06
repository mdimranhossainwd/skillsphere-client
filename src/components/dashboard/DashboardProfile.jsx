import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import useAuth from "../../hooks/useAuth";
import Profile from "../../shared/Profile";
const DashboardProfile = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <Profile
        heading={user?.displayName}
        img={user?.photoURL}
        email={user?.email}
      />
      {/* <Calendar date={new Date()} /> */}
    </div>
  );
};

export default DashboardProfile;
