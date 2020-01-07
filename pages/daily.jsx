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
  const [view, setView] = useState({
    date: today,
    data: day
  });

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
    monthName[view.date.getMonth()] +
    " " +
    view.date.getDate() +
    ", " +
    view.date.getFullYear();

  async function previousDay() {
    const previous = new Date(view.date.setDate(view.date.getDate() - 1));
    const previousData = await getDailyData(previous);
    setView({
      date: previous,
      data: previousData
    });
  }
  async function nextDay() {
    const next = new Date(view.date.setDate(view.date.getDate() + 1));
    const nextData = await getDailyData(next);
    setView({
      date: next,
      data: nextData
    });
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
      <Day data={view.data} />

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
