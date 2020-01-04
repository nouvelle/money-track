import React from "react";

const Monthly = props => {
  console.log("monthly", props);
  return (
    <div className="tableArea">
      <p>Monthly Page</p>
      <style jsx>{`
        .tableArea {
          max-width: 880px;
          margin: 80px auto 40px;
      `}</style>
    </div>
  );
};

export default Monthly;
