import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Log in to your Edu-Synnc Account
        </h2>
        <div>
          <form className="max-w-sm mx-auto">
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

            <button
              type="submit"
              className="text-white py-3 mt-10 px-6 w-full text-md font-bold bg-[#34B4F4]"
            >
              Log In
            </button>
            <button className="flex gap-4 items-center border w-full py-2.5 px-4 justify-center my-3">
              <img
                className="w-8"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt=""
              />
              <span className="text-md font-semibold">
                Continue With Google
              </span>
            </button>
            <div>
              <div className="flex items-center justify-center">
                <p className="text-sm text-center py-4 font-medium">
                  Don't have an account ?
                </p>
                <Link
                  to="/signup"
                  className=" text-sm font-bold text-[#34B4F4]"
                >
                  {" "}
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
