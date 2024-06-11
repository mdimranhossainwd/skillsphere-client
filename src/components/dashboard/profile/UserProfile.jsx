const UserProfile = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mina Winkel"
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">Mina Winkel</h1>
            <p className="text-gray-600">
              I'm a Product Designer based in Melbourne.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
            Hire me
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded">
            Follow
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="w-2/3 p-6 bg-white">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p className="text-md font-medium">
              I specialise in UX/UI design, brand strategy, and Webflow
              development.
            </p>
          </div>
          <hr />

          <div className="mb-6 space-y-2">
            <h2 className="text-xl font-medium  mt-5">About me</h2>
            <p className="text-md font-semibold">
              I'm a Product Designer based in Melbourne, Australia. I specialise
              in UX/UI design, brand strategy, and Webflow development. I'm
              always striving to grow and learn something new and I don't take
              myself too seriously.
            </p>
            <p className="mt-2 text-md font-medium">
              My work has been featured on
              <a href="https://www.typewolf.com" className="text-blue-500">
                {" "}
                Typewolf
              </a>
              ,
              <a
                href="https://www.mindsparklemag.com"
                className="text-blue-500"
              >
                {" "}
                Mindsparkle Magazine
              </a>
              ,
              <a href="https://webflow.com" className="text-blue-500">
                {" "}
                Webflow
              </a>
              ,
              <a href="https://www.fontsinuse.com" className="text-blue-500">
                {" "}
                Fonts In Use
              </a>
              ,
              <a href="https://www.csswinner.com" className="text-blue-500">
                {" "}
                CSS Winner
              </a>
              ,
              <a href="https://www.hipsthetic.com" className="text-blue-500">
                {" "}
                hipsthetic
              </a>
              ,
              <a href="https://www.sitesinspire.com" className="text-blue-500">
                {" "}
                Sitesinspire
              </a>
              , and
              <a
                href="https://www.bestwebsite.gallery"
                className="text-blue-500"
              >
                {" "}
                Best Website Gallery
              </a>
              .
            </p>
            <span className="text-md font-semibold mt-44 block">
              Read More{" "}
            </span>
          </div>
        </div>

        <div className="py-14 px-4 bg-white">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded">
              UX Design
            </span>
            <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded">
              Product Design
            </span>
            <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded">
              Webflow
            </span>
            <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded">
              Figma
            </span>
          </div>
          <div className="mt-4">
            <p>
              <strong>Location:</strong> Melbourne, Australia
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://minawinkel.com" className="text-blue-500">
                minawinkel.com
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@minawinkel.com" className="text-blue-500">
                hello@minawinkel.com
              </a>
            </p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
