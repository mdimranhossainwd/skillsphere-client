const CourseCard = ({ course }) => {
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
  } = course || {};

  return (
    <div>
      <div className="my-6">
        <img className="w-full px-2" src={image_url} alt="" />
        <div className="px-2">
          <h2 className="text-md w-56 mt-2 font-bold">{title}</h2>

          <div className="flex items-center mt-4">
            {/* Star SVGs */}
            <svg
              className="w-3 h-3 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {/* More SVGs */}
            <div>
              <p className="text-sm ml-3">({enrolled_students})</p>
            </div>
          </div>
          <h4 className="text-lg font-bold mt-1">${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
