import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const SupportPages = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      email: user?.email || "",
    };

    try {
      const { data } = await axios.post("/support", submittedData);
      toast.success("Ticket Submitted Successfully");
    } catch (err) {
      console.log(err);
    }

    console.log("Form Submitted", submittedData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white my-12">
      <h2 className="text-3xl font-arima text-center font-semibold mb-4">
        Supports Sections
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          value={user?.email || ""}
          disabled
          className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
          required
        />

        <select
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          className="w-full p-3 text-md text-gray-500 font-semibold border rounded-lg"
        >
          <option>General Inquiry</option>
          <option>Course Access Issue</option>
          <option>Payment Issue</option>
          <option>Technical Issue</option>
        </select>
        <textarea
          name="message"
          placeholder="Describe your issue..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-lg hover:bg-secondary"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default SupportPages;
