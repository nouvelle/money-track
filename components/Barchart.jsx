import React from "react";
import { Bar } from "react-chartjs-2";

const Barchart = props => {
  const { daily, month, daySpots } = props.data;
  const data = {
    labels: [],
    datasets: [
      {
        label: "daily expense",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: []
      }
    ]
  };

  for (let i = 1; i <= daySpots; i++) {
    data.labels = [...data.labels, i];
    if (daily[i]) {
      data.datasets[0].data = [...data.datasets[0].data, daily[i]];
    } else {
      data.datasets[0].data = [...data.datasets[0].data, 0];
    }
  }

  return (
    <div className="barchart">
      <Bar data={data} />
      <style jsx>{`
        .barchart {
          margin: 30px 20px;
        }
      `}</style>
    </div>
  );
};

export default Barchart;
