import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Login = () => (
  <div>
    <Header />
    <Nav page={"Login"} />
    <h1>This page is Login</h1>

    <style jsx>{`
      h1 {
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

export default Login;
