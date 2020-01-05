import React from "react";
import fetch from "isomorphic-unfetch";
/* Component */
import Header from "../components/Header";
import Nav from "../components/Nav";
import Daily from "../components/Daily";
import Monthly from "../components/Monthly";

const View = props => {
  const monthly = props.data;
  return (
    <div>
      <Header />
      <Nav page={"View"} />
      <h1 className="title">Today's usage history</h1>
      {/* <Daily /> */}
      <Monthly data={monthly} />

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

View.getInitialProps = async function() {
  const today = new Date();
  const param = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2);
  const url = "http://localhost:9000/api/urllist/month?date=" + param;
  const data = await fetch(url).then(res => res.json());

  return { data: data };
};

export default View;
