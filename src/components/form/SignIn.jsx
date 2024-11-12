import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      toast.success("Welcome back! You have successfully logged in.");
      navigate("/");
      console.log(`User's Login`, user);
    });
  };

  const handleToGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
      const { data } = await axios.post("/users", {
        email: result?.user?.email,
        name: result?.user?.displayName,
        photo: result?.user?.photoURL,
        role: "students",
      });
      console.log(data);
      navigate("/");
      toast.success("Google login successful. Enjoy your time with us!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Log in to your Skill-Sphere Account
        </h2>
        <div>
          <form onSubmit={handleLogin} className="max-w-sm mx-auto">
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
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md block w-full py-2.5 px-4 dark:placeholder-gray-400 dark:text-black"
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
                name="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md block w-full py-2.5 px-4 dark:placeholder-gray-400 dark:text-black"
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
            <button
              onClick={handleToGoogle}
              className="flex gap-4 items-center border w-full py-2.5 px-4 justify-center my-3"
            >
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
