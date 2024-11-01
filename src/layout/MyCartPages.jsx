const MyCartPages = () => {
  return (
    <div className="container mx-auto">
      <div className="border-t">
        <h2 className="text-4xl py-6 font-bold">Shopping Cart</h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-8 p-8  bg-white ">
        {/* Left Side - Course Info */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-lg font-semibold">1 Course in Cart</h2>
          <div className="flex border-t py-5 flex-col md:flex-row mt-4 items-center md:items-start gap-4">
            {/* Course Image */}
            <img
              src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg" // Replace with actual image URL
              alt="Course Thumbnail"
              className="w-40 h-24 object-cover rounded-md"
            />

            {/* Course Details */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">
                100 Days of Code: The Complete Python Pro Bootcamp
              </h3>
              <p className="text-sm text-gray-600">
                By Dr. Angela Yu, Developer and Lead Instructor
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="px-2 py-1 bg-yellow-300 text-yellow-800 text-xs font-bold rounded">
                  Bestseller
                </span>
                <span className="text-yellow-500 font-semibold text-sm">
                  4.7
                </span>
                <span className="text-gray-600 text-sm">(331,340 ratings)</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                56.5 total hours • 592 lectures • All Levels
              </p>
            </div>

            {/* Price Details */}
            <div className="flex flex-col items-end md:items-start md:ml-4">
              <button className="text-blue-600 text-sm hover:underline">
                Remove
              </button>
              <button className="text-blue-600 text-sm hover:underline mt-1">
                Save for Later
              </button>
              <p className="text-xl font-semibold text-purple-600 mt-2">
                $12.99
              </p>
              <p className="text-gray-500 line-through text-sm">$74.99</p>
            </div>
          </div>
        </div>

        {/* Right Side - Total and Coupon */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md">
          <h2 className="text-lg font-semibold">Total:</h2>
          <p className="text-3xl font-semibold text-purple-600 mt-2">$12.99</p>
          <p className="text-gray-500 text-sm line-through">$74.99</p>
          <p className="text-green-600 text-sm">83% off</p>

          <button className="w-full bg-purple-600 text-white py-2 rounded-md mt-4 hover:bg-purple-700">
            Checkout
          </button>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Promotions</h3>
            <div className="flex items-center justify-between mt-2 bg-white border rounded p-2">
              <span className="text-gray-700">ST6MT103124 is applied</span>
              <button className="text-gray-500 hover:text-red-600">✕</button>
            </div>

            <div className="mt-3 flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Enter Coupon"
                className="w-full p-2 outline-none"
              />
              <button className="bg-purple-600 text-white px-4 py-2 hover:bg-purple-700">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPages;
