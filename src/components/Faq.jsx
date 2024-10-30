const Faq = () => {
  return (
    <div id="accordion-collapse" className="mt-3">
      <h2 id="accordion-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-3 px-5 font-medium text-gray-500 bg-[#F7F9FA] border border-b-0 border-gray-200 rounded-t-md focus:ring-gray-200 gap-3"
          aria-expanded="true"
          aria-controls="accordion-body-1"
        >
          <span>Getting Started</span>
          <svg
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-body-1"
        className="hidden"
        aria-labelledby="accordion-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>

      <h2 id="accordion-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full py-3 px-5 font-medium text-gray-500 bg-[#F7F9FA] border border-b-0 border-gray-200 rounded-t-md focus:ring-gray-200 gap-3"
          aria-expanded="false"
          aria-controls="accordion-body-2"
        >
          <span>Basic Concept</span>
          <svg
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-body-2"
        className="hidden"
        aria-labelledby="accordion-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            Flowbite is first conceptualized and designed using the Figma
            software, so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>

      <h2 id="accordion-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-3 px-5 font-medium text-gray-500 bg-[#F7F9FA] border border-b-0 border-gray-200 rounded-t-md focus:ring-gray-200 gap-3"
          aria-expanded="false"
          aria-controls="accordion-body-3"
        >
          <span>Bonus[Optional]</span>
          <svg
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-body-3"
        className="hidden"
        aria-labelledby="accordion-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Flowbite relies on smaller and standalone components, while
            Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500">
            We recommend using both Flowbite, Flowbite Pro, and Tailwind UI as
            there is no technical reason stopping you from using the best of
            both.
          </p>
          <ul className="pl-5 text-gray-500 list-disc">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                className="text-blue-600 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
