import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyCourse = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const getData = async () => {
    const { data } = await axios.get(`/payment?email=${user?.email}`);
    return data;
  };

  const { data: getCourse, refetch } = useQuery({
    queryKey: ["getCourse"],
    queryFn: getData,
  });

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl font-arima pt-8 text-center font-bold">
          Welcome back{" "}
          <span className="bg-gradient-to-r from-secondary via-green-300 to-primary bg-clip-text text-transparent">
            {user?.displayName}
          </span>
          , ready for your next lesson?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5 mt-8">
          {getCourse?.map((userCourse) =>
            userCourse?.courses?.map((item) => (
              <div key={item?._id}>
                <div>
                  <div className="bg-[#15193d] rounded-xl flex items-center gap-6 py-4 px-6">
                    <img
                      className="w-[190px] h-[120px]"
                      src={item?.image_url}
                      alt=""
                    />
                    <div>
                      <h3 className="text-[#C1B6D3] text-xl mb-2 font-semibold">
                        {item?.title}
                      </h3>
                      <span className="text-white font-medium">
                        {item?.instructor}
                      </span>

                      <div className="flex gap-4 mt-6">
                        <button className="bg-gradient-to-r from-primary to-secondary  py-1 px-7 font-medium text-white rounded-full">
                          Continue
                        </button>
                        <button className="border text-white py-1 px-7 font-medium rounded-md">
                          Outline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MyCourse;
