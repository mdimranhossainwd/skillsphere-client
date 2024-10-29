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
    <div className="container mx-auto">
      <h2>Hello</h2>
    </div>
  );
};

export default CourseDetailsPage;
