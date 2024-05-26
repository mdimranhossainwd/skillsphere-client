const RecommandCourse = () => {
  return (
    <div className="bg-[#F7F9FA] py-12 mt-6">
      <div className="container mx-auto ">
        <h3 className="text-2xl font-bold px-3 md:px-0">
          Topics recommended for you
        </h3>

        <div className="grid my-6 grid-cols-2 md:grid-cols-3 mx-3 md:mx-0 lg:grid-cols-5 gap-2">
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Python</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Data Science</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Maching Learning</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Web Development</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">JavaScript</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Node.js</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">JavaScript</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Cyber Security</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">MongoDB</h3>
          </div>
          <div className="border py-3 px-5 text-center">
            <h3 className="text-lg font-bold">Flask</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommandCourse;
