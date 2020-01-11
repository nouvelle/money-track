import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
/* Component */
import Layout from "../components/Layout";
import Day from "../components/Day";
/* Material-ui Icon */
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const getDailyData = async date => {
  const url = "http://localhost:9000/api/item/day?date=" + date;
  const data = await fetch(url).then(res => res.json());
  return data;
};

const Daily = props => {
  const { data, today } = props;
  const preDay = Number(today) - 1;
  const nexDay = Number(today) + 1;

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
    monthName[Number(today.slice(4, 6))] +
    " " +
    Number(today.slice(6, 8)) +
    ", " +
    Number(today.slice(0, 4));

  return (
    <Layout page={"Daily"}>
      <div className="titleBar">
        <Link href={`?date=${preDay}`}>
          <IconButton aria-label="left">
            <ChevronLeftIcon />
          </IconButton>
        </Link>
        <h1 className="title">{msg}</h1>
        <Link href={`?date=${nexDay}`}>
          <IconButton aria-label="right">
            <ChevronRightIcon />
          </IconButton>
        </Link>
      </div>
      <Day data={data} />

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

Daily.getInitialProps = async context => {
  const { date } = context.query;
  const data = await getDailyData(date);
  return { data: data, today: date };
};

export default Daily;
