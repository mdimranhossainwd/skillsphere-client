import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Faq from "../Faq";
const CourseOverview = ({ courseInfo }) => {
  const {
    _id: cartId,
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
  } = courseInfo || {};
  console.log(courseInfo);

  const axios = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Add to Cart course Data

  const cartData = {
    cartId: cartId,
    title: title,
    description: description,
    instructor: instructor,
    price: price,
    rating: rating,
    total_reviews: total_reviews,
    category: category,
    image_url: image_url,
    language: language,
    course_level: course_level,
    duration: duration,
    enrolled_students: enrolled_students,
    curriculum: curriculum,
    requirements: requirements,
    what_you_will_learn: what_you_will_learn,
    detailed_description: detailed_description,
    userName: user?.email,
    photo: user?.photoURL,
    email: user?.email,
    status: "Pending",
  };

  const handleAddCart = async (e) => {
    try {
      const { data } = await axios.post("/carts", cartData);
      toast.success("Add to Cart This Course");
      navigate("/cart");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-6 grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* What You'll Learn Section */}
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
            <ul className="grid text-sm md:grid-cols-2 gap-4 text-gray-700">
              <li>
                ✓ Build 16 web development projects for your portfolio, ready to
                apply for junior developer jobs.
              </li>
              <li>
                ✓ Learn the latest technologies, including Javascript, React,
                Node, and even Web3 development.
              </li>
              <li>
                ✓ After the course you will be able to build ANY website you
                want.
              </li>
              <li>
                ✓ Build fully-fledged websites and web apps for your startup or
                business.
              </li>
              <li>✓ Work as a freelance web developer.</li>
              <li>✓ Master frontend development with React.</li>
              <li>✓ Master backend development with Node.</li>
              <li>✓ Learn professional developer best practices.</li>
            </ul>
          </div>

          {/* Explore Related Topics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Explore related topics</h2>
            <div className="flex gap-3">
              <span className="px-4 py-2 border rounded-full text-gray-700">
                {category}
              </span>
            </div>
          </div>

          {/* Course Includes */}
          <div>
            <h2 className="text-2xl font-bold mb-4">This course includes:</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide w-4 lucide-hourglass"
                >
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
                {duration} hours on-demand video
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide w-4 lucide-folder-down"
                >
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  <path d="M12 10v6" />
                  <path d="m15 13-3 3-3-3" />
                </svg>
                194 downloadable resources
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide w-4 lucide-tablet-smartphone"
                >
                  <rect width="10" height="14" x="3" y="8" rx="2" />
                  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                  <path d="M8 18h.01" />
                </svg>
                Access on mobile and TV
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide w-4 lucide-trophy"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                Certificate of completion
              </li>
            </ul>
          </div>

          <hr />

          {/* Course FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Course content</h2>
            <div className="flex items-center font-medium text-[13px] gap-2 list-none">
              <li>41 Sections </li>
              <li>23 Lectures </li>
              <li>
                {duration}{" "}
                {curriculum &&
                  curriculum[0] &&
                  curriculum[0].lectures &&
                  curriculum[0].lectures[0]?.duration}{" "}
                total length
              </li>
            </div>
            <Faq />
          </div>

          {/* Course Requirements */}

          <div>
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <div>
              <li>{requirements?.[0]}</li>
              <li>{requirements?.[1]}</li>
            </div>
          </div>
          <hr />
          {/* Descriptions */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Descriptions</h2>
            <div>
              <p className="">
                {description}{" "}
                <span className="font-medium">{detailed_description}</span>
              </p>
            </div>
          </div>

          {/* Instructor */}
          <h2 className="text-2xl font-bold mb-4">Instructors</h2>

          <div className="border rounded-md py-4 px-8">
            <h1 className="text-xl font-arima font-bold text-blue-600">
              <a
                href="https://academind.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {instructor}
              </a>
            </h1>
            <p className="text-gray-600">Online Education</p>

            <div className="flex items-center mt-4 space-x-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1681491808153-f04e9be80cca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image URL
                alt="Maximilian Schwarzmüller"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div>
                <p className="flex items-center text-gray-700">
                  <span className="text-yellow-500 mr-2">⭐</span>4.6 Instructor
                  Rating
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="mr-2">👥</span>747,448 Reviews
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="mr-2">👨‍🎓</span>3,100,597 Students
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="mr-2">📚</span>48 Courses
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-800">
              Bundling the courses and know-how of successful instructors,
              Academind strives to deliver high-quality online education.
            </p>
            <p className="mt-2 text-gray-800">
              Online Education, Real-Life Success - that's what Academind stands
              for. Learn topics like web development, data analysis, and more in
              a fun and engaging way.
            </p>
            <p className="mt-2 text-gray-800">
              We've taught more than 3,000,000 students on a broad variety of
              topics. We'd love to teach you as well! :)
            </p>
            <p className="mt-4 text-gray-600 italic">Keep learning!</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Subscription Offer */}
          <div className="border p-6 rounded-lg text-center">
            <h2 className="text-lg font-arima font-bold">
              Subscribe to skillsphere courses
            </h2>
            <p className="text-gray-700 mt-2">
              Get this course, plus 12,000+ of our top-rated courses, with
              Personal Plan.{" "}
              <a href="#" className="text-purple-600 underline">
                Learn more
              </a>
            </p>
            <button className="w-full bg-[#34B4F4] text-white font-semibold py-3  mt-4">
              Try Personal Plan for free
            </button>
            <p className="text-gray-500 text-sm mt-2">
              Starting at $11.00 per month after trial
            </p>
            <p className="text-gray-500 text-sm">Cancel anytime</p>

            <div className="flex items-center my-4">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>

            {/* Course Price */}
            <p className="text-2xl font-semibold">$ {price}</p>
            <button
              onClick={handleAddCart}
              className="w-full border hover:bg-gray-200 border-black text-black font-semibold py-2 mt-4"
            >
              Add to cart
            </button>

            {/* Guarantee */}
            <p className="text-center text-gray-500 text-sm mt-4">
              30-Day Money-Back Guarantee
              <br />
              Full Lifetime Access
            </p>

            {/* Share, Gift, and Coupon Links */}
            <div className="flex justify-between text-gray-600 text-sm mt-6">
              <a href="#" className="hover:underline">
                Share
              </a>
              <a href="#" className="hover:underline">
                Gift this course
              </a>
              <a href="#" className="hover:underline">
                Apply Coupon
              </a>
            </div>

            {/* Coupon Application */}
            <div className="mt-4">
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <p className="text-gray-700 text-sm">LETSLEARNNOW is applied</p>
                <button className="text-gray-500 font-semibold">✕</button>
              </div>
              <div className="flex mt-2">
                <input
                  type="text"
                  placeholder="Enter Coupon"
                  className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
                />
                <button className="bg-black text-white font-semibold px-4 rounded-r">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
