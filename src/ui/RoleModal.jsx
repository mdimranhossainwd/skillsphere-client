import Modal from "../shared/Modal";

const RoleModal = ({ isOpen, setIsOpen, item }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Change the Member Role
          </h2>
          <p className="text-md font-medium text-gray-700">
            Changing user's role changes their API token access.
          </p>
          <div>
            <img
              src={item?.photo}
              alt={item?.name || "User Image"}
              className="w-16 h-16 rounded-full"
            />
            <p className="text-lg font-semibold">{item?.name}</p>
            <p className="text-sm text-gray-600">{item?.email}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RoleModal;
