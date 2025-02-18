import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import Modal from "../shared/Modal";

const SupportModal = ({ isOpen, setIsOpen, item, refetch }) => {
  const axios = useAxios();
  const [selectStatus, setSelectStatus] = useState(item?.status);
  useEffect(() => {
    setSelectStatus(item?.status || "Pending");
  }, [item]);

  const updateStatus = async () => {
    try {
      const { data } = await axios.patch(`/support/${item?._id}`, {
        status: selectStatus,
      });
      refetch();
      toast.success("Status Updated Successfully");
    } catch (err) {
      console.log(err);
    }

    console.log(selectStatus);
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Solve this Problem">
        <div>
          <select
            name="issueType"
            value={selectStatus}
            onChange={(e) => setSelectStatus(e.target.value)}
            className="w-full p-3 my-4 text-md text-gray-500 font-semibold border rounded-lg"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex items-center justify-between">
            <button className="bg-primary py-2 px-6 rounded-md text-white ">
              Cancel
            </button>
            <button
              onClick={updateStatus}
              className="bg-secondary py-2 px-6 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SupportModal;
