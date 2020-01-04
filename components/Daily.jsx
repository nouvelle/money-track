import React from "react";

const Daily = props => {
  console.log(props);
  return (
    <div className="tableArea">
      <p>Daily Page</p>
      <style jsx>{`
        .tableArea {
          max-width: 880px;
          margin: 80px auto 40px;
      `}</style>
    </div>
  );
};

export default Daily;
