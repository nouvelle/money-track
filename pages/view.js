import React from "react";
/* Component */
import Header from "../components/Header";
import Nav from "../components/Nav";
import Usage from "../components/Usage";

const Profile = () => (
  <div>
    <Header />
    <Nav page={"View"} />
    <h1 className="title">Today's usage history</h1>
    <Usage />

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

export default Profile;
