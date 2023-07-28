import React from "react";
import { BarChart } from "../Components/BarChart";
import LineChart from "../Components/LineChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { MonthlyData, QuaterlyData } from "../utils/Data";

Chart.register(CategoryScale);

function GraphPage() {
  const MonthlyChart = {
    labels: MonthlyData.labels.map((data) => data),
    datasets: [
      {
        label: "Monthly Sales",
        data: MonthlyData.data.map((data) => data),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const QuaterlyChart = {
    labels: QuaterlyData.labels.map((data) => data),
    datasets: [
      {
        label: "Quterly sale",
        data: QuaterlyData.data.map((data) => data),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div style={{}}>
      <BarChart QuaterlyChart={QuaterlyChart} MonthlyChart={MonthlyChart} />
      <LineChart QuaterlyChart={QuaterlyChart} MonthlyChart={MonthlyChart} />
    </div>
  );
}

export default GraphPage;
