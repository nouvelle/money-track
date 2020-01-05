import React from "react";
import fetch from "isomorphic-unfetch";
/* Component */
import Header from "../components/Header";
import Nav from "../components/Nav";
import Month from "../components/Month";

const Monthly = props => {
  const month = props.data;

  const today = new Date();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const msg = monthName[today.getMonth()] + ", " + today.getFullYear();
  return (
    <div>
      <Header />
      <Nav page={"Monthly"} />
      <h1 className="title">{msg}</h1>
      <Month data={month} />

      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 30px;
          line-height: 1.15;
          font-size: 32px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

Monthly.getInitialProps = async function() {
  const today = new Date();
  const param = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2);
  const url = "http://localhost:9000/api/urllist/month?date=" + param;
  // const url = "http://localhost:9000/api/urllist/month?date=201911";
  const data = await fetch(url).then(res => res.json());

  return { data: data };
};

export default Monthly;
