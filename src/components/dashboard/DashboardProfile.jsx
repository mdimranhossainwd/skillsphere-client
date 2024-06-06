import useAuth from "../../hooks/useAuth";
import Profile from "../../shared/Profile";

const DashboardProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Profile
        heading={user?.displayName}
        img={user?.photoURL}
        email={user?.email}
      />
    </div>
  );
};

export default DashboardProfile;
