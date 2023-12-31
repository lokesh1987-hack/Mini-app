import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const BarChart = ({ MonthlyChart, QuaterlyChart }) => {
  const [chartView, setChartView] = useState(MonthlyChart);

  const chartShow = (data) => {
    data === "monthly"
      ? setChartView(MonthlyChart)
      : setChartView(QuaterlyChart);
  };
  console.log(chartView);

  return (
    <div>
      <div class="jumbotron bg-light ps-5 pt-5 pb-5">
        <Button variant="contained" color="primary">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Back
          </Link>
        </Button>
      </div>
      <div
        className="chart-container"
        style={{ width: "50%", margin: "auto", marginTop: "10%" }}
      >
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
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
    </div>
  );
};
