import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const UserPaymentHistory = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios.get(`/payment?email=${user?.email}`);
    return data;
  };

  const { data: getPaymentData, refetch } = useQuery({
    queryKey: ["getPaymentData"],
    queryFn: getData,
  });

  console.log(getPaymentData);

  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl text-center font-arima font-bold ">
          Payment History Info
        </h1>
      </div>
    </>
  );
};

export default UserPaymentHistory;
