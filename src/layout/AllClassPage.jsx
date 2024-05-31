import CourseCard from "../components/card/CourseCard";

const AllClassPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r my-6 from-indigo-300 via-purple-300 to-pink-200 py-16 px-10">
        <h2 className="text-2xl text-black ml-6 font-bold">Here's All Class</h2>
      </div>

      <div>
        <CourseCard />
      </div>
    </div>
  );
};

export default AllClassPage;
