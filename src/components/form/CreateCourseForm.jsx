const CreateCourseForm = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-arima pt-10 text-center font-bold">
          Create a New Course
        </h2>
        <form>
          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Course Title
              </label>
              <input
                type="text"
                placeholder="Enter course title"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Instructor */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Instructor Name
              </label>
              <input
                type="text"
                placeholder="Instructor's name"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Price (USD)
              </label>
              <input
                type="number"
                placeholder="Enter price"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <input
                type="number"
                step="0.1"
                placeholder="Enter rating"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Total Reviews */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Total Reviews
              </label>
              <input
                type="number"
                placeholder="Enter total reviews"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Single Column Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter course description"
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                placeholder="Enter category (e.g., Web Development)"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <input
                type="text"
                placeholder="Enter language (e.g., English)"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Course Level */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Course Level
              </label>
              <select className="w-full p-2 border rounded">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium mb-2">Duration</label>
              <input
                type="text"
                placeholder="Enter duration (e.g., 30 hours)"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Requirements
            </label>
            <textarea
              placeholder="Enter requirements (one per line)"
              rows="3"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          {/* What You Will Learn */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              What You Will Learn
            </label>
            <textarea
              placeholder="Enter learning objectives (one per line)"
              rows="3"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Detailed Description
            </label>
            <textarea
              placeholder="Enter detailed course description"
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit Course
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCourseForm;
