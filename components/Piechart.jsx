import React from "react";
import { Pie } from "react-chartjs-2";

const Piechart = props => {
  const monthlyData = props.data;
  const colorSet = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF9F40"];

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: []
      }
    ]
  };

  Object.keys(monthlyData).forEach((item, i) => {
    data.labels = [...data.labels, item];
    data.datasets[0].data = [...data.datasets[0].data, monthlyData[item]];
    data.datasets[0].backgroundColor = [
      ...data.datasets[0].backgroundColor,
      colorSet[i]
    ];
    data.datasets[0].hoverBackgroundColor = [
      ...data.datasets[0].hoverBackgroundColor,
      colorSet[i]
    ];
  });

  return (
    <div className="piechart">
      <Pie data={data} />
      <style jsx>{`
        .piechart {
          margin: 30px 20px;
        }
      `}</style>
    </div>
  );
};

export default Piechart;
