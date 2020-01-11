import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
/* Component */
import Layout from "../components/Layout";
import Month from "../components/Month";
/* Material-ui Icon */
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const today = new Date();

const getMonthlyData = async date => {
  const param = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2);
  const url = "http://localhost:9000/api/item/month?date=" + param;
  const data = await fetch(url).then(res => res.json());

  return data;
};

const Monthly = props => {
  const month = props.data;
  const [view, setView] = useState({
    date: today,
    data: month
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
  const msg = monthName[view.date.getMonth()] + ", " + view.date.getFullYear();

  async function previousMonth() {
    const previous = new Date(view.date.setMonth(view.date.getMonth() - 1));
    const previousData = await getMonthlyData(previous);
    setView({
      date: previous,
      data: previousData
    });
  }
  async function nextMonth() {
    const next = new Date(view.date.setMonth(view.date.getMonth() + 1));
    const nextData = await getMonthlyData(next);
    setView({
      date: next,
      data: nextData
    });
  }
  return (
    <Layout page={"Monthly"}>
      <div className="titleBar">
        <IconButton aria-label="left" onClick={previousMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <h1 className="title">{msg}</h1>
        <IconButton aria-label="left" onClick={nextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Month data={view.data} />

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

Monthly.getInitialProps = async () => {
  const data = await getMonthlyData(today);
  return { data: data };
};

export default Monthly;
