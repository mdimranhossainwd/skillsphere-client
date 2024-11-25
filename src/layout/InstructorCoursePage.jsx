import useInstructor from "../hooks/useInstructor";

const InstructorCoursePage = () => {
  const [instructor] = useInstructor();
  console.log(instructor);

  return (
    <>
      <div></div>
    </>
  );
};

export default InstructorCoursePage;
