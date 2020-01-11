import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
/* Component */
import Layout from "../components/Layout";
import Day from "../components/Day";
/* Material-ui Icon */
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const today = new Date();

const getDailyData = async date => {
  const param =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2);
  const url = "http://localhost:9000/api/item/day?date=" + param;
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
    <Layout page={"Daily"}>
      <div className="titleBar">
        <IconButton aria-label="left" onClick={previousDay}>
          <ChevronLeftIcon />
        </IconButton>
        <h1 className="title">{msg}</h1>
        <IconButton aria-label="right" onClick={nextDay}>
          <ChevronRightIcon />
        </IconButton>
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
    </Layout>
  );
};

Daily.getInitialProps = async () => {
  const data = await getDailyData(today);
  return { data: data };
};

export default Daily;
