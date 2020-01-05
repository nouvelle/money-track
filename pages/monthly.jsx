import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
/* Component */
import Header from "../components/Header";
import Nav from "../components/Nav";
import Month from "../components/Month";
/* Material-ui Icon */
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const today = new Date();

const getMonthlyData = async date => {
  const param = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2);
  const url = "http://localhost:9000/api/urllist/month?date=" + param;
  // const url = "http://localhost:9000/api/urllist/month?date=201911";
  const data = await fetch(url).then(res => res.json());

  return data;
};

const Monthly = props => {
  const month = props.data;
  const [viewDate, setViewDate] = useState(today);
  const [viewData, setViewData] = useState(month);

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
  const msg = monthName[viewDate.getMonth()] + ", " + viewDate.getFullYear();

  async function previousMonth() {
    const previous = new Date(viewDate.setMonth(viewDate.getMonth() - 1));
    setViewDate(previous);
    const previousData = await getMonthlyData(previous);
    setViewData(previousData);
  }
  async function nextMonth() {
    const next = new Date(viewDate.setMonth(viewDate.getMonth() + 1));
    setViewDate(next);
    const nextData = await getMonthlyData(next);
    setViewData(nextData);
  }
  return (
    <div>
      <Header />
      <Nav page={"Monthly"} />
      <div className="titleBar">
        <ChevronLeftIcon onClick={previousMonth} />
        <h1 className="title">{msg}</h1>
        <ChevronRightIcon onClick={nextMonth} />
      </div>
      <Month data={viewData} />

      <style jsx>{`
        .titleBar {
          display: flex;
          justify-content;
          align-items: center;
          margin: 0px 5%;
          padding-top: 30px;
        }
        .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 32px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

Monthly.getInitialProps = async () => {
  const data = await getMonthlyData(today);
  return { data: data };
};

export default Monthly;
