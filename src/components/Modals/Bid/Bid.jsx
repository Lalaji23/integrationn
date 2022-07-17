import Bidresult from "./bid-result/bid-result";
import "./Bid.css";
import { useState } from "react";
import React from "react";

function Bid({ setOpenBid }) {
  const [BidresultOpen, setBidresultOpen] = useState(false);
  return (
    <div className="modalBackground">
      {" "}
      {BidresultOpen && <Bidresult setOpenBidresult={setBidresultOpen} />}
      <div className="modalContainer3">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenBid(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>BID</h1>
        </div>
        <div className="body3">
          <p>How much would You Like To Bid</p>
          <h1>
            <input placeholder="BID.." type="number"></input>
          </h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenBid(false);
            }}
            id="cancelBtn"
          >
            Nope
          </button>
          <button
            onClick={() => {
              setBidresultOpen(true);
            }}
          >
            Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bid;
