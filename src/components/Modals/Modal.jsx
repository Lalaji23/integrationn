import React from "react";

import "./Modal.css";
import { Link } from "react-router-dom";

import { useState } from "react";
function Modal({ setOpenModal }) {
  const [date, setDate] = useState();
  console.log("Date", date);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Auction</h1>
        </div>
        <div className="body">
          <h1>Starting price</h1>
          <h1>
            <input placeholder="Price.." type="number"></input>
          </h1>
          <h1>Start date</h1>
          <h1>
            <input type="date" onChange={(e) => setDate(e.targer.value)} />
          </h1>
          <h1>end date</h1>
          <h1>
            <input type="date" onChange={(e) => setDate(e.targer.value)} />
          </h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Nope
          </button>
          <Link to={"/manage-auction-page"}>
            {" "}
            <button>Auction</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
