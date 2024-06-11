import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import useAuth from "../../hooks/useAuth";
import UserProfile from "./profile/UserProfile";

const DashboardProfile = () => {
  const { user } = useAuth();

  return (
    <div className=" my-14">
      <div
        className="object-cover p-6 h-44 w-full flex items-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/WpdZdTv/cee37a21-1aac-4efe-973e-c8ff72ef079b.jpg)",
        }}
      >
        <div className=""></div>
        <div className="">
          <div className="max-w-md">
            <h3 className="text-2xl mb-6 italic font-bold">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-[#76c893] to-blue-500 text-transparent bg-clip-text">
                {user?.displayName}
              </span>
            </h3>
          </div>
        </div>
      </div>

      <UserProfile />

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // padding: "20px",
          color: "#fff",
          marginTop: "25px",
          marginBottom: "25px",
        }}
        className="gap-6"
      >
        <ModuleFinishTrack />
        <VideoDuration />
      </div>

      <CustomLineChart /> */}

      {/* <Profile
        heading={user?.displayName}
        img={user?.photoURL}
        email={user?.email}
      /> */}
      {/* <Calendar date={new Date()} /> */}
    </div>
  );
};

export default DashboardProfile;
