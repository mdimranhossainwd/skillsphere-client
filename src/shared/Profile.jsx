const Profile = ({ img, name, email, phone, role, heading }) => {
  return (
    <div>
      <div className="my-12 w-full">
        <div className="my-16 bg-white py-10 rounded-[44px]  px-10 text-center">
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
