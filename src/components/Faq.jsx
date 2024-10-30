const Faq = () => {
  return (
    <div className="join join-vertical w-full mt-4">
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">Get Started</div>
        <div className="collapse-content">
          <p>Tips On The Interactive Coding Exercises</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">Basic Concepts</div>
        <div className="collapse-content">
          <p>Intro to Courses Details </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-lg font-semibold">
          <h2 className="text-md font-semibold">
            {" "}
            BONUS: Fancy, More Advance Concept
          </h2>
        </div>
        <div className="collapse-content">
          <p>Check Out This Fancy Todo List</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
