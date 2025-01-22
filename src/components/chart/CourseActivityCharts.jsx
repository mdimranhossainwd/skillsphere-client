import Chart from "react-google-charts";

const CourseActivityCharts = () => {
  const data = [
    ["x", "dogs"],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ];

  const options = {
    title: "Learning Activity",
    hAxis: { title: "Time" },

    legend: "none",
  };

  return (
    <>
      <div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default CourseActivityCharts;
