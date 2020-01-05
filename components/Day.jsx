import React from "react";
/* Component */
import DailyTable from "./DailyTable";

const Day = props => {
  return (
    <div className="daily">
      {props.data.length === 0 ? (
        <p className="noEntry">No Entry</p>
      ) : (
        <DailyTable data={props.data} />
      )}
      <style jsx>{`
        .daily {
          max-width: 880px;
          margin: 10px auto 20px;
        }
        .noEntry {
          margin: 30px auto;
          text-align: center;
          color: #666;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Day;
