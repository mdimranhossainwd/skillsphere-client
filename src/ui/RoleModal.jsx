import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import Modal from "../shared/Modal";

const RoleModal = ({ isOpen, setIsOpen, item, refetch }) => {
  const axios = useAxios();

  // Changes User's Role
  const changeRole = async (id, currentRole) => {
    const newRole = currentRole === "students" ? "instructor" : "students";
    try {
      const { data } = await axios.patch(`/users/${id}`, { role: newRole });
      toast.success(`User role updated to ${newRole}`);
      refetch();
    } catch (err) {
      console.log(err);
    }
    console.log(currentRole);
  };

  // Deleted a user's
  const handleUserDel = async (id) => {
    try {
      const { data } = await axios.delete(`/users/${id}`);
      toast.success("This user is Removed from this Site");
      refetch();
    } catch (err) {
      console.log(err);
    }

    console.log(id);
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Change the Member Role
          </h2>
          <p className="text-[15px] font-medium text-gray-700">
            Changing user's role changes their API token access.
          </p>
          <div className="flex items-center gap-4 pb-6 mt-5">
            <img
              src={item?.photo}
              alt={item?.name || "User Image"}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{item?.name}</p>
              <p className="text-sm text-gray-600">{item?.email}</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => changeRole(item?._id, item?.role)}
              className="hover:bg-gradient-to-r bg-gray-600 hover:from-primary hover:to-secondary py-2 px-5 font-medium text-white rounded-full"
            >
              Instructor
            </button>
            <button className="bg-gradient-to-r hover:from-primary hover:to-secondary bg-gray-600 py-2 px-7 font-medium text-white rounded-full">
              Admin
            </button>
            <button
              onClick={() => handleUserDel(item?._id)}
              className="bg-gradient-to-r hover:from-primary hover:to-secondary bg-gray-600 py-2 px-7 font-medium text-white rounded-full"
            >
              Remove
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RoleModal;
