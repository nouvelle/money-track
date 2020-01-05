import React from "react";
import Piechart from "./Piechart";
import Barchart from "./Barchart";

const Monthly = props => {
  return (
    <div className="monthly">
      <Piechart data={props.data.payment} />
      <Barchart data={props.data} />
      <style jsx>{`
        .monthly {
          max-width: 880px;
          margin: 10px auto 20px;
        }
      `}</style>
    </div>
  );
};

export default Monthly;
