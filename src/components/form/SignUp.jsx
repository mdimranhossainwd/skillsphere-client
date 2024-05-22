import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Sign up and start learning
        </h2>
        <div>
          <form className="max-w-sm mx-auto">
            <div className="">
              <label
                htmlFor="repeat-password"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="password"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md block w-full py-2.5 px-4 dark:placeholder-gray-400 dark:text-white"
                required
                placeholder="Full Name ...."
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md block w-full py-2.5 px-4 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your email here ...."
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md block w-full py-2.5 px-4 dark:placeholder-gray-400 dark:text-white"
                required
                placeholder="Type Password..."
              />
            </div>

            <div className="flex items-start mt-10 mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="text-white py-3 px-6 w-full text-md font-bold bg-[#34B4F4]"
            >
              Sign Up
            </button>

            <div>
              <p className=" text-[13px] py-3 text-center mb-3 mt-2">
                By signing up, you agree to our <b>Terms of Use</b> and{" "}
                <b>Privacy Policy.</b>
              </p>
              <hr />
              <div className="flex items-center justify-center">
                <p className="text-sm text-center py-4 font-medium">
                  Already have an account ?
                </p>
                <Link
                  to="/signin"
                  className=" text-sm font-bold text-[#34B4F4]"
                >
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
