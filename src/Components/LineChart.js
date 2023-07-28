import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Button from "@mui/material/Button";

function LineChart({ MonthlyChart, QuaterlyChart }) {
  const [chartView, setChartView] = useState(MonthlyChart);

  const chartShow = (data) => {
    data === "monthly"
      ? setChartView(MonthlyChart)
      : setChartView(QuaterlyChart);
  };

  return (
    <div
      className="chart-container"
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartView}
        options={{
          plugins: {
            title: {
              display: true,
              text: chartView.datasets[0].label,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "40px",
        }}
      >
        <Button variant="contained" onClick={() => chartShow("monthly")}>
          Monthly
        </Button>
        <Button variant="contained" onClick={() => chartShow("quaterly")}>
          Quaterly
        </Button>
      </div>
    </div>
  );
}

export default LineChart;
