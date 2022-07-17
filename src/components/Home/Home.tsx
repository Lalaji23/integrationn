import React from "react";
import Right from "./Home-right/Right";
import "./Home.css";
import Menu from "../../assets/home-img.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-parent">
          <div className="home-right">
            <div className="right-items">
              <h1>Phigitals</h1>
              <h2>Tagline</h2>
              <Link to={"/market"}>
                {" "}
                <button>START Collection</button>
              </Link>{" "}
            </div>
          </div>
          <div className="home-left">
            <div className="left-items">
              <Right
                image={Menu}
                seller="Roman logistics"
                brandname="Zivame"
                Itemname="Jacket"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
