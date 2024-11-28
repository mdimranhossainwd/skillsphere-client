import Modal from "../shared/Modal";

const RoleModal = ({ isOpen, setIsOpen, item }) => {
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
            <button className="hover:bg-gradient-to-r bg-gray-600 hover:from-primary hover:to-secondary py-2 px-5 font-medium text-white rounded-full">
              Instructor
            </button>
            <button className="bg-gradient-to-r hover:from-primary hover:to-secondary bg-gray-600 py-2 px-7 font-medium text-white rounded-full">
              Admin
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RoleModal;
