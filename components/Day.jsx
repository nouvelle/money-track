import React from "react";

const Day = props => {
  console.log(props);
  return (
    <div className="daily">
      {props.data.length === 0 ? (
        <p className="noEntry">No Entry</p>
      ) : (
        <p>Daily Page</p>
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
