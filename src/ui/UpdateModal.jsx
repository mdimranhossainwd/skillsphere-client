import Modal from "../shared/Modal";

const UpdateModal = ({ isOpen, setIsOpen, item, refetch }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        <h2>Update to Course Info</h2>
      </div>
    </>
  );
};

export default UpdateModal;
