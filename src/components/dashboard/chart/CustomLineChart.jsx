import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Jan",
    electronics: 0,
    clothing: 30,
    homeGoods: 1650,
    outdoor: 1580,
    accessories: 1510,
  },
  {
    month: "Feb",
    electronics: 160,
    clothing: 260,
    homeGoods: 1680,
    outdoor: 1600,
    accessories: 1550,
  },
  {
    month: "Mar",
    electronics: 640,
    clothing: 540,
    homeGoods: 1700,
    outdoor: 1620,
    accessories: 1600,
  },
  {
    month: "Apr",
    electronics: 650,
    clothing: 750,
    homeGoods: 1750,
    outdoor: 1680,
    accessories: 1620,
  },
  {
    month: "May",
    electronics: 1200,
    clothing: 1130,
    homeGoods: 1800,
    outdoor: 1700,
    accessories: 1650,
  },
  {
    month: "Jun",
    electronics: 1200,
    clothing: 1000,
    homeGoods: 1900,
    outdoor: 1800,
    accessories: 1670,
  },
  {
    month: "Jul",
    electronics: 1400,
    clothing: 1500,
    homeGoods: 1950,
    outdoor: 1850,
    accessories: 1700,
  },
  {
    month: "Aug",
    electronics: 1600,
    clothing: 1510,
    homeGoods: 2000,
    outdoor: 1900,
    accessories: 1750,
  },
  {
    month: "Sep",
    electronics: 1800,
    clothing: 1650,
    homeGoods: 2050,
    outdoor: 1950,
    accessories: 1800,
  },
  {
    month: "Oct",
    electronics: 1750,
    clothing: 1890,
    homeGoods: 2100,
    outdoor: 2000,
    accessories: 1850,
  },
  {
    month: "Nov",
    electronics: 1500,
    clothing: 1300,
    homeGoods: 2150,
    outdoor: 2050,
    accessories: 1900,
  },
  {
    month: "Dec",
    electronics: 2000,
    clothing: 1900,
    homeGoods: 2200,
    outdoor: 2100,
    accessories: 1950,
  },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer className="bg-[#070E1F]" width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" domain={["dataMin", "dataMax"]} />
        <YAxis domain={[0, "auto"]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="electronics"
          stroke="#00e5ff"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="clothing" stroke="#ff4081" />
        <Line type="monotone" dataKey="homeGoods" stroke="#ff9100" />
        <Line type="monotone" dataKey="outdoor" stroke="#76ff03" />
        <Line type="monotone" dataKey="accessories" stroke="#d500f9" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
