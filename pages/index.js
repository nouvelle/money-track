import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Header />
    <Nav page={"Input"} />

    <div className="wrapInputPage">
      <h1 className="title">Welcome to Money Track!</h1>
      <div className="inputArea">
        <div className="wrapDate">
          <div className="placeholder">When did you buy?</div>
          <input type="date" required />
          <span className="focus_line"></span>
        </div>
        <div className="wrapInput">
          <input
            className="ef"
            type="text"
            placeholder="What did you buy?"
            required
          />
          <span className="focus_line"></span>
        </div>
        <div className="wrapInput">
          <input
            className="ef"
            type="number"
            min="0"
            placeholder="How much?"
            required
          />
          <span className="focus_line"></span>
        </div>
        <div className="wrapSelect">
          <select required>
            <option value="" hidden>
              How did you pay?
            </option>
            <option value="1">Cash</option>
            <option value="2">Edy</option>
            <option value="3">Amex (credit card)</option>
            <option value="4">View (credit card)</option>
            <option value="5">Other</option>
          </select>
        </div>
        <div className="wrapButton">
          <button className="btn-square">Clear</button>
          <button className="btn-square">OK</button>
        </div>
      </div>
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
      .inputArea {
        max-width: 880px;
        margin: 80px auto 40px;
      }
      .wrapInput,
      .wrapSelect {
        position: relative;
        width: 80%;
        margin: 40px 3%;
      }
      .wrapDate {
        position: relative;
        display: inline-block;
        width: 80%;
        margin: 0 3%;
        border-bottom: 1px solid #1b2538;
      }
      .wrapInput input[type="text"],
      .wrapInput input[type="number"] {
        font: 15px/24px sans-serif;
        box-sizing: border-box;
        width: 100%;
        letter-spacing: 1px;
      }
      .wrapInput input[type="text"]:focus,
      .wrapInput input[type="number"]:focus {
        outline: none;
      }
      .wrapDate input[type="date"] {
        position: relative;
        width: 100%;
        border: 0;
        background: transparent;
      }
      .wrapSelect select {
        width: 100%;
        cursor: pointer;
        text-overflow: ellipsis;
        border: none;
        outline: none;
        background: transparent;
        -webkit-appearance: none;
        border-radius: 0px;
        border-bottom: 1px solid #1b2538;
      }
      input::placeholder,
      .placeholder {
        font-size: 15px;
        color: #666;
      }
      .wrapSelect select,
      .wrapDate input[type="date"] {
        font-size: 15px;
        padding: 8px 38px 8px 0px;
        color: #666;
      }
      .ef {
        padding: 4px 0;
        border: 0;
        border-bottom: 1px solid #1b2538;
        background-color: transparent;
      }
      .ef ~ .focus_line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        transition: 0.4s;
        background-color: #067df7;
      }
      .ef:focus ~ .focus_line,
      .wrapInput.ef ~ .focus_line,
      .wrapSelect.ef select {
        width: 100%;
        transition: 0.4s;
      }
      .wrapButton {
        display: flex;
        justify-content: space-around;
        margin: 0 20px;
      }
      .btn-square {
        width: 45%;
        min-width: 50px;
        height: 50px;
        display: inline-block;
        padding: 0.5em 1em;
        text-decoration: none;
        background: #668ad8;
        color: #fff;
        border-bottom: solid 4px #627295;
        border-radius: 3px;
        outline: none;
      }
      .btn-square:active {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        border-bottom: none;
      }
    `}</style>
  </div>
);

export default Home;
