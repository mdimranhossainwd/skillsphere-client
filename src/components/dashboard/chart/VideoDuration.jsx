import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "02 Jun", duration: 0 },
  { date: "03 Jun", duration: 0 },
  { date: "04 Jun", duration: 0 },
  { date: "05 Jun", duration: 0 },
  { date: "06 Jun", duration: 0 },
  { date: "07 Jun", duration: 25 },
  { date: "08 Jun", duration: 0 },
];

const VideoDuration = () => {
  return (
    <div
      style={{
        background: "#1d1d1d",
        color: "#fff",
        padding: "30px",
        borderRadius: "10px",
      }}
      className="flex-1"
    >
      <div className="flex items-center gap-4 justify-between mb-4">
        <h3 className="text-3xl font-bold text-white">Video Duration</h3>
        <div className="flex items-center gap-4 ">
          <span>Weekly</span>
          <span style={{ cursor: "pointer" }}>ℹ️</span>
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span>Total: 276 Hours and 52 Minutes.</span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="duration" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VideoDuration;
