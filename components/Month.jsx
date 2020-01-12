import React from "react";
/* Component */
import Piechart from "./Piechart";
import Barchart from "./Barchart";

const Month = props => {
  return (
    <div className="monthly">
      {Object.keys(props.data).length === 0 ? (
        <p className="noEntry">No Entry</p>
      ) : (
        <>
          <Piechart data={props.data.payment} />
          <Barchart data={props.data} />
        </>
      )}
      <style jsx>{`
        .monthly {
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

export default Month;
