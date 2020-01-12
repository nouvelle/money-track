import React, { useState, useEffect } from "react";
/* Material-ui Icon */
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const DailyTable = props => {
  const dataset = props.data;
  const [dailyData, setdailyData] = useState(dataset);

  const sum = dailyData.reduce((total, data) => {
    return (total += data.price);
  }, 0);
  const deleteItem = async id => {
    const domain = document.domain;
    let url;
    domain === "localhost"
      ? (url = `http://${domain}:9000/api/item?id=${id}`)
      : (url = `/api/item?id=${id}`);
    const method = "DELETE";
    const data = await fetch(url, { method }).then(res => res.json());
    setdailyData(dailyData.filter(daily => daily.id !== data[0].id));
  };
  useEffect(() => {
    setdailyData(dataset);
  }, [dataset]);
  return (
    <div className="dailytable">
      <table className="table">
        <tbody>
          <tr>
            <th align="center">No</th>
            <th align="center">Item</th>
            <th align="center">Price (yen)</th>
            <th align="center">Payment</th>
            <th></th>
          </tr>
          {dailyData.map((data, i) => (
            <tr key={data.id}>
              <td align="center">{i + 1}</td>
              <td align="center">{data.item}</td>
              <td align="right">{data.price}</td>
              <td align="center">{data.payment}</td>
              <td align="center">
                <DeleteForeverIcon onClick={() => deleteItem(data.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">Total cost: {sum} yen</p>
      <style jsx>{`
        .dailytable {
          margin: 30px 20px;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          line-height: 1.5;
          border: 1px solid #ccc;
          font-size: 20px;
        }
        .table th {
          padding: 10px;
          font-weight: bold;
          border-top: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-bottom: 2px solid #067df7;
          background: #eee;
        }
        .table td {
          border-right: 1px solid #ccc;
          line-height: 2em;
          padding: 5px 10px;
        }
        .total {
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default DailyTable;
