import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useCourse from "../../hooks/useCourse";
import "./CheckoutForm.css";
const CheckoutForm = () => {
  const [course] = useCourse();
  const totalCost = course.reduce((acc, cur) => acc + cur.price, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const courseObject = course.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", ",");
  };

  const date = new Date(); // Specify the date
  const formattedDate = formatDate(date);

  useEffect(() => {
    if (totalCost) {
      getClientSecret(totalCost);
    }
  }, [totalCost]);

  // Get Client Secret
  const getClientSecret = async (price) => {
    try {
      const { data } = await axios.post("/create-payment-intent", {
        price: parseFloat(totalCost),
      });
      console.log(data);
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  // Post hangle Payment
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email,
        name: user?.displayName,
      },
    });
    if (error) {
      console.log("Payment Error", error);
    } else {
      console.log(paymentMethod);
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      console.log("confirmErr", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          email: user?.email,
          name: user?.displayName,
          status: "completed",
          transId: paymentIntent.id,
          totalCost,
          formattedDate,
          courses: course.map((item) => ({
            title: item?.title,
            description: item?.description,
            instructor: item?.instructor,
            image_url: item?.image_url,
            language: item?.language,
            duration: item?.duration,
          })),
        };
        try {
          const { data } = await axios.post("/payment", paymentInfo);
          console.log(data);
          toast.success("Payment Successfully !");
          navigate("/cart");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 space-y-10 mt-5 items-center justify-center">
      <form onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex items-center gap-4">
          <button
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ed56f] focus-visible:ring-offset-2"
            type="submit"
          >
            Pay
          </button>
          <button className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ed56f] focus-visible:ring-offset-2">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
