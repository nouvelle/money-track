import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
/* Component */
import Header from "../components/Header";
import Nav from "../components/Nav";
import Day from "../components/Day";
/* Material-ui Icon */
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const today = new Date();

const getDailyData = async date => {
  const param =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2);
  const url = "http://localhost:9000/api/item/day?date=" + param;
  // const url = "http://localhost:9000/api/item/day?date=20200101";
  const data = await fetch(url).then(res => res.json());

  return data;
};

const Daily = props => {
  const day = props.data;
  const [viewDate, setViewDate] = useState(today);
  const [viewData, setViewData] = useState(day);

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
  const msg =
    monthName[viewDate.getMonth()] +
    " " +
    viewDate.getDate() +
    ", " +
    viewDate.getFullYear();

  async function previousDay() {
    const previous = new Date(viewDate.setDate(viewDate.getDate() - 1));
    setViewDate(previous);
    const previousData = await getDailyData(previous);
    setViewData(previousData);
  }
  async function nextDay() {
    const next = new Date(viewDate.setDate(viewDate.getDate() + 1));
    setViewDate(next);
    const nextData = await getDailyData(next);
    setViewData(nextData);
  }
  return (
    <div>
      <Header />
      <Nav page={"Daily"} />
      <div className="titleBar">
        <ChevronLeftIcon onClick={previousDay} />
        <h1 className="title">{msg}</h1>
        <ChevronRightIcon onClick={nextDay} />
      </div>
      <Day data={viewData} />

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

Daily.getInitialProps = async () => {
  const data = await getDailyData(today);
  return { data: data };
};

export default Daily;
