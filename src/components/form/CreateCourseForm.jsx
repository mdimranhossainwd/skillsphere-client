import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const CreateCourseForm = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title?.value ?? "";
    const description = form.description?.value ?? "";
    const instructor = form.instructor?.value ?? "";
    const price = parseFloat(form.price?.value || 0);
    const rating = parseFloat(form.rating?.value || 0);
    const total_reviews = parseInt(form.total_reviews?.value || 0, 10);
    const category = form.category?.value ?? "";
    const image_url = form.image_url?.value ?? "";
    const language = form.language?.value ?? "";
    const course_level = form.course_level?.value ?? "";
    const duration = form.duration?.value ?? "";
    const section_title = form.section_title?.value ?? "";
    const lecture_title = form.lecture_title?.value ?? "";
    const lecture_duration = form.lecture_duration?.value ?? "";
    const enrolled_students = parseInt(form.enrolled_students?.value || 0, 10);

    const curriculum = [
      {
        section_title: section_title,
        lectures: [
          {
            lecture_title: lecture_title,
            duration: lecture_duration,
          },
        ],
      },
    ];

    const requirements = form.requirements?.value.split("\n") || [];
    const what_you_will_learn =
      form.what_you_will_learn?.value.split("\n") || [];
    const detailed_description = form.detailed_description?.value ?? "";
    const status = "Pending";
    const newCourse = {
      title,
      description,
      instructor,
      price,
      rating,
      total_reviews,
      category,
      image_url,
      language,
      course_level,
      duration,
      enrolled_students,
      curriculum,
      requirements,
      what_you_will_learn,
      detailed_description,
      email: user?.email,
      status,
    };

    try {
      const { data } = await axios.post("/instructor-course", newCourse);
      toast.success("The Course has been successfully added");
      form.reset();
    } catch (err) {
      console.log(err);
    }

    console.log("New Course Data:", newCourse);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-arima py-5 mb-6 text-center font-bold">
        Create a New Course
      </h2>
      <form onSubmit={handleAddCourse}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Course Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter course title"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Instructor Name
            </label>
            <input
              id="instructor"
              type="text"
              placeholder="Instructor's name"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Price (USD)
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter price"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <input
              id="rating"
              type="number"
              step="0.1"
              placeholder="Enter rating"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Total Reviews
            </label>
            <input
              id="total_reviews"
              type="number"
              placeholder="Enter total reviews"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
          <div>
            <label className="block text-sm font-medium mb-2">
              Section Title
            </label>
            <input
              type="text"
              placeholder="Enter section title"
              name="section_title"
              className="w-full p-2 border rounded mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Lecture Title
            </label>
            <input
              type="text"
              placeholder="Enter lecture title"
              name="lecture_title"
              className="w-full p-2 border rounded mb-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Lecture Duration
            </label>
            <input
              type="text"
              placeholder="Enter duration (e.g., 12 minutes)"
              name="lecture_duration"
              className="w-full p-2 border rounded mb-4"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            id="description"
            placeholder="Enter course description"
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              id="category"
              type="text"
              placeholder="Enter category (e.g., Web Development)"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <input
              id="language"
              type="text"
              placeholder="Enter language (e.g., English)"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Course Level
            </label>
            <select id="course_level" className="w-full p-2 border rounded">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <input
              id="duration"
              type="text"
              placeholder="Enter duration (e.g., 30 hours)"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Requirements</label>
          <textarea
            id="requirements"
            placeholder="Enter requirements (one per line)"
            rows="3"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            What You Will Learn
          </label>
          <textarea
            id="what_you_will_learn"
            placeholder="Enter learning objectives (one per line)"
            rows="3"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Detailed Description
          </label>
          <textarea
            id="detailed_description"
            placeholder="Enter detailed course description"
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            id="image_url"
            type="text"
            placeholder="Enter image URL"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#5C53F2] text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourseForm;
