const BusinessBanner = () => {
  return (
    <div className="container mx-auto px-16 my-16">
      <div className="lg:flex items-center justify-between">
        <div>
          <h3 className="text-2xl mb-4">
            {" "}
            <span className="font-bold">Skillsphere</span>{" "}
            <span className="text-secondary">business</span>
          </h3>
          <div>
            <h2 className="text-3xl lg:text-4xl font-medium mb-5">
              Upskill your team with <br /> Online Business
            </h2>
            <ol className="text-lg font-medium space-y-2" type="number">
              <li>
                1. Unlimited access to 25,000+ top Edu Sync <br /> courses,
                anytime, anywhere
              </li>
              <li>
                2. International course collection in 14 <br /> languages
              </li>
              <li>3. Top certifications in tech and business</li>
            </ol>
            <div className="flex gap-3 mt-6">
              <button className="bg-black py-2 px-4 text-white text-lg font-bold">
                Get Online Business
              </button>
              <button className="border py-2 px-4 border-[#000] text-black text-lg font-bold">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <img
          className="lg:w-2/5 mt-10 lg:mt-0"
          src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BusinessBanner;
