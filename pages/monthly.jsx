import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import moment from "moment";
/* Component */
import Layout from "../components/Layout";
import Month from "../components/Month";
/* Material-ui Icon */
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Monthly = props => {
  const { data, today } = props;
  const preMonth = moment(`${today}01`)
    .subtract(1, "months")
    .format("YYYYMM");
  const nextMonth = moment(`${today}01`)
    .add(1, "months")
    .format("YYYYMM");

  const monthName = [
    "",
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
    monthName[Number(today.slice(4, 6))] + ", " + Number(today.slice(0, 4));

  return (
    <Layout page={"Monthly"}>
      <div className="titleBar">
        <Link href={`?date=${preMonth}`}>
          <IconButton aria-label="left">
            <ChevronLeftIcon />
          </IconButton>
        </Link>
        <h1 className="title">{msg}</h1>
        <Link href={`?date=${nextMonth}`}>
          <IconButton aria-label="left">
            <ChevronRightIcon />
          </IconButton>
        </Link>
      </div>
      <Month data={data} />

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

Monthly.getInitialProps = async context => {
  const { date } = context.query;
  const url = "http://localhost:9000/api/item/month?date=" + date;
  const data = await fetch(url).then(res => res.json());
  return {
    data: data,
    today: date
  };
};

export default Monthly;
