import "./add-memory.css";
import React from "react";

function Addmemory({ setOpenAddmemory }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer8">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenAddmemory(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Add Memory</h1>
        </div>
        <div className="body5">
          <p>Drag and drop to upload</p>
          <button type="upload" upload="">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addmemory;
