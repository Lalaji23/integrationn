import React from "react";

import "./manage-auction.css";

function Manage({ setOpenManage }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer10">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenManage(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Bids</h1>
        </div>
        <div className="body7">
          <div className="body-part">
            <h3>@bidder2 12E</h3>
            <h3>16/6/22</h3>
          </div>
          <div className="body-part-btn">
            <button
              className="btnn"
              style={{ "background-color": "gray", color: "black" }}
            >
              Decline
            </button>
            <button className="btnn">accept</button>
          </div>
        </div>
        <hr />
        <div className="body7">
          <div className="body-part">
            <h3>@bidder2 12E</h3>
            <h3>16/6/22</h3>
          </div>
          <div className="body-part-btn">
            <button
              className="btnn"
              style={{ "background-color": "gray", color: "black" }}
            >
              Decline
            </button>
            <button className="btnn">accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
