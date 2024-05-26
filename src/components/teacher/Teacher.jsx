const Teacher = () => {
  return (
    <div className="container mx-auto px-6 md:px-28 my-20">
      <div className="lg:flex items-center justify-around gap-8">
        <img
          className="mb-8 lg:mb-0"
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          alt=""
        />
        <div className="lg:w-1/3">
          <h3 className="text-3xl font-bold mb-4">Become an instructor</h3>
          <p className="text-lg mb-3 font-medium">
            Instructors from around the world teach millions of learners on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="bg-black text-white py-2 px-5 text-lg font-semibold mt-3">
            Start teaching today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
