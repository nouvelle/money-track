import React from "react";
/* Component */
import Header from "./Header";
import Nav from "./Nav";
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
        color: #333;
        padding: 10px;
        box-sizing: border-box;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 30px;
        line-height: 1.15;
        font-size: 30px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Input;
