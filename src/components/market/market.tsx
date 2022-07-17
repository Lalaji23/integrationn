import "./Start.css";
import React from "react";

import MainContent from "./Start-collection-image/Start-collection-image";

export default function Start() {
  return (
    <div>
      <div className="start-contaier">
        <div className="start-parent">
          <div className="start-header">
            <div className="start-top-items">
              <h2>Market</h2>
              <h4>
                Explore and care real <span>P</span>higitals
              </h4>
            </div>
          </div>
        </div>
        <div className="start-parent-footer">
          {" "}
          <div className="start-footer">
            <div className="search-bar">
              <form>
                <input
                  type="text"
                  placeholder="what your are looking for"
                ></input>
                <button type="submit">search</button>
              </form>
            </div>
            <div className="brands-info">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
