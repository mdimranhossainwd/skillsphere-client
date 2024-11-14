import { useState } from "react";
import WishlistCard from "../components/card/WishlistCard";
import useCourse from "../hooks/useCourse";
import Modal from "../shared/Modal";

const MyCartPages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [course, refetch] = useCourse();
  console.log(course);
  const totalCost = course.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="container mx-auto">
      <div className="border-t">
        <h2 className="text-4xl py-6 font-bold">Shopping Cart</h2>
      </div>

      {course.length === 0 ? (
        // Show error image when cart is empty
        <div className="flex flex-col items-center py-16">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/914/428/small/no-document-or-data-found-ui-illustration-design-free-vector.jpg"
            alt="No data available"
            className="w-1/2 md:w-1/3"
          />
          <p className="text-lg font-semibold mt-4">Your cart is empty!</p>
        </div>
      ) : (
        // Show cart details when items are available
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 p-8 bg-white">
          {/* Left Side - Course Info */}
          <div>
            <h2 className="text-lg border-b pb-1 font-bold">
              {course.length} Course in Cart
            </h2>

            {course?.map((item) => (
              <WishlistCard key={item?._id} item={item} refetch={refetch} />
            ))}
          </div>

          {/* Right Side - Total and Coupon */}
          <div className="w-full lg:w-1/3 md:ml-16 p-6 rounded-md">
            <h2 className="text-lg font-semibold">Total:</h2>
            <p className="text-2xl font-bold text-black mt-2">
              {totalCost.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm line-through">$74.99</p>
            <p className="text-green-600 text-sm">83% off</p>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-blue-600 font-semibold text-white py-2 rounded-md mt-4 hover:bg-[#5C53FE]"
            >
              Checkout
            </button>
            <Modal course={course} isOpen={isOpen} setIsOpen={setIsOpen} />

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
                <button className="bg-blue-600 text-white px-4 py-2 hover:bg-[#5C53FE]">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCartPages;
