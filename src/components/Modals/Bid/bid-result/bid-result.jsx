import React from "react";

import "./bid-result.css";

function Bidresult({ setOpenBidresult }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer8">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenBidresult(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title2">
          <h1>Bid Status</h1>
        </div>
        <div className="body51">
          <p>
            {" "}
            Congratulations your bid has been succesfully placed. The seller
            will be notified
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bidresult;
