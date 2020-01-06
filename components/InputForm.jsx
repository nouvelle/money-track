import React, { useState } from "react";

const InputForm = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState("");
  const [message, setResult] = useState("");

  // Click Clear button
  const clickedClear = e => {
    e.preventDefault();
    setResult("");
    setDate("");
    setItem("");
    setPrice("");
    setPayment("");
    document.form.reset();
  };

  // Check value
  const onChangeDate = e => setDate(e.target.value);
  const onChangeItem = e => setItem(e.target.value);
  const onChangePrice = e => setPrice(e.target.value);
  const onChangePayment = e => setPayment(e.target.value);

  // Click OK button
  const clickedOk = async e => {
    e.preventDefault();
    setResult("");
    if (!date || !item || !price || !payment) {
      setResult("All fields are required.");
      return;
    }
    const domain = document.domain;
    let reqUrl;
    domain === "localhost"
      ? (reqUrl = `http://${domain}:9000/api/item`)
      : (reqUrl = "/api/item");
    const method = "POST";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = JSON.stringify({
      user_id: "eriko",
      date: date,
      item: item,
      price: price,
      payment: payment
    });
    const rtn = await fetch(reqUrl, { method, headers, body }).then(res => res);
    if (rtn.status === 200) {
      document.form.reset();
      setDate("");
      setItem("");
      setPrice("");
      setPayment("");
      setResult("Success!");
    } else {
      setResult("An error has occurred. Please wait a moment and try again.");
    }
    return rtn.status;
  };

  return (
    <div className="inputArea">
      <form name="form">
        <div className="wrapDate">
          <div className="placeholder">When did you buy?</div>
          <input type="date" onChange={onChangeDate} required />
          <span className="focus_line"></span>
        </div>
        <div className="wrapInput">
          <input
            className="ef"
            type="text"
            placeholder="What did you buy?"
            onChange={onChangeItem}
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
            onChange={onChangePrice}
            required
          />
          <span className="focus_line"></span>
        </div>
        <div className="wrapSelect">
          <select onChange={onChangePayment} required>
            <option value="" hidden>
              How did you pay?
            </option>
            <option value="Cash">Cash</option>
            <option value="Edy">Edy</option>
            <option value="Amex">Amex (credit card)</option>
            <option value="View">View (credit card)</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="wrapButton">
          <button className="btn-square" onClick={clickedClear}>
            Clear
          </button>
          <button className="btn-square" onClick={clickedOk}>
            OK
          </button>
        </div>
        {message === "Success!" ? (
          <div className="msg success">{message}</div>
        ) : (
          <div className="msg error">{message}</div>
        )}
      </form>
      <style jsx>{`
        .inputArea {
          max-width: 880px;
          margin: 80px auto 40px;
        }
        .wrapInput,
        .wrapSelect {
          position: relative;
          width: 90%;
          margin: 40px 3%;
        }
        .wrapDate {
          position: relative;
          display: inline-block;
          width: 90%;
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
        .wrapDate input[type="date"]:focus,
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
          background-color: #668ad8;
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
        .msg {
          text-align: center;
          margin-top: 10px;
        }
        .msg.success {
          color: #067df7;
        }
        .msg.error {
          color: #d86666;
        }
      `}</style>
    </div>
  );
};

export default InputForm;
