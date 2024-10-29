import { useLoaderData } from "react-router-dom";

const CourseDetailsPage = () => {
  const loader = useLoaderData();
  const {
    _id,
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
  } = loader || {};

  return (
    <div className="bg-[#2D2F31] mb-6">
      <div className="container mx-auto">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 justify-between lg:flex lg:items-center">
            <div className="mt-8 w-3/5 text-white list-none lg:px-6 lg:mt-0">
              <li className="font-semibold mb-6">
                Development > {category} > Web Development{" "}
              </li>
              <h1 className="text-2xl  font-bold text-gray-800 dark:text-white lg:text-3xl">
                {title}
              </h1>

              <p className="mt-6 text-gray-500 dark:text-gray-400 ">
                “ {description} ”
              </p>

              <p className="mt-6 text-white">
                Total enrolled {enrolled_students} students
              </p>

              <p className="mt-3 mb-5 text-white">
                Created By{" "}
                <span className="font-semibold text-[#C0C4FC] underline">
                  skillsphere hunter
                </span>
              </p>
              <div className="flex items-center gap-6">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide w-5 lucide-shield"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                  Last updated 12/2023{" "}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide w-5 lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  {language}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide w-5 lucide-keyboard-music"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="M6 8h4" />
                    <path d="M14 8h.01" />
                    <path d="M18 8h.01" />
                    <path d="M2 12h20" />
                    <path d="M6 12v4" />
                    <path d="M10 12v4" />
                    <path d="M14 12v4" />
                    <path d="M18 12v4" />
                  </svg>
                  English [Auto]
                </li>
              </div>
            </div>
            <div>
              <img
                className=" float-right w-full h-64 object-cover"
                src={image_url}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
