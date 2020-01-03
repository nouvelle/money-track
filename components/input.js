import React from "react";
/* Component */
import Header from "./header";
import Nav from "./nav";
import InputForm from "./InputForm";

const Input = () => (
  <div>
    <Header />
    <Nav page={"Input"} />

    <div className="wrapInputPage">
      <h1 className="title">Welcome to Money Track!</h1>
      <InputForm />
    </div>

    <style jsx>{`
      .wrapInputPage {
        width: 100%;
        margin: 5px 15px;
        color: #333;
      }
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

export default Input;
