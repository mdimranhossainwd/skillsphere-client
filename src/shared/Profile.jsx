const Profile = ({ img, name, email, phone, role, heading }) => {
  return (
    <div>
      <div className="my-12 pl-12">
        <h3 className="text-2xl italic font-bold">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-[#76c893] to-blue-500 text-transparent bg-clip-text">
            {heading}
          </span>
        </h3>

        <div className="my-16 bg-white py-14 rounded-[44px] px-12 w-1/2 text-center">
          <img src={img} className="w-44 mx-auto rounded-full mb-6" alt="" />
          <div>
            <h5 className="italic text-md mb-3 font-bold text-[#4361ee]">
              {email}
            </h5>
            <span className="font-bold">++ 88012345678923</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
