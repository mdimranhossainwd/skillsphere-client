import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Profile = () => {
  const { user } = useAuth();
  const axios = useAxios();
  return (
    <div className="container mx-auto">
      <div className="px-8 py-3">
        <h2 className="text-2xl font-semibold font-arima">
          Welcome Back, {user?.displayName}
        </h2>
      </div>
      <div className="bg-[#5853b9] px-8 py-16 mx-8 text-center justify-center items-center space-y-7 w-1/2">
        <div>
          <img
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white"
            src={user?.photoURL}
            alt="Profile"
          />
        </div>
        <h2 className="text-lg font-playwrite">{user?.displayName}</h2>
      </div>
    </div>
  );
};

export default Profile;
