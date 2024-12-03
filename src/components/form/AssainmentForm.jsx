const AddAssignmentForm = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Add Assignment
          </h2>
          <form>
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Upload File */}
            <div className="mb-4">
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="fileUpload"
              >
                Upload Assignment File
              </label>
              <input
                type="file"
                id="fileUpload"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Add Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAssignmentForm;
