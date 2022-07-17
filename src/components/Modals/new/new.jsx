import React from "react";

import "./new.css";

function New({ setOpenNew }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer9">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenNew(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Congratulations@</h1>
        </div>
        <div className="body6">
          <p>
            {" "}
            @seller has accepted your bid. Item will be added to you collection
          </p>
        </div>
      </div>
    </div>
  );
}

export default New;
