import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AddAssignmentForm = () => {
  const { user } = useAuth();
  const axios = useAxios();
  // Add Assainment Functions

  const addAssainment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title?.value;
    const course = form.course?.value;
    const dueDate = form.dueDate?.value;
    const description = form.description?.value;
    const email = user?.email;
    const formAllData = { title, course, dueDate, description, email };

    try {
      const { data } = await axios.post("/add-assainments", formAllData);
      toast.success("wooow ! successfully add this assainments");
    } catch (err) {
      toast.err("Something is wrong");
    }

    console.log(formAllData);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 rounded-lg">
        <h2 className="text-4xl font-arima py-5 mb-6 text-center font-bold">
          Add Assainments
        </h2>
        <div className="w-full">
          <form onSubmit={addAssainment}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {/* Assignment Title */}
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-medium mb-2"
                  htmlFor="title"
                >
                  Assignment Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter assignment title"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>

              {/* Course */}
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-medium mb-2"
                  htmlFor="course"
                >
                  Course Name
                </label>
                <select
                  id="course"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
                >
                  <option value="">Select Course</option>
                  <option value="data-structure">Data Structure</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="devops">Devops</option>
                  <option value="ethical-hacking">Ethical Hacking</option>
                </select>
              </div>

              {/* Due Date */}
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-medium mb-2"
                  htmlFor="dueDate"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="description"
              >
                Assignment Description
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Enter assignment details"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-secondary"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md text-white bg-gradient-to-r from-secondary via-green-400 to-primary hover:to-secondary  text-center py-2 font-semibold"
              >
                Add Assainments
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAssignmentForm;
