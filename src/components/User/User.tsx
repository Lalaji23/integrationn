import "./User.css";
import pic from "../../assets/home-img.png";
import Message from "../../assets/message.png";
import { Link } from "react-router-dom";
import New from "../Modals/new/new";
import { useState } from "react";
import React from "react";

export default function User() {
  const [NewOpen, setNewOpen] = useState(false);
  return (
    <div>
      <div className="user-container">
        {NewOpen && <New setOpenNew={setNewOpen} />}
        <div className="user-parent">
          <div className="user-header">
            <div className="user-header-left">
              <img alt="" src={pic}></img>
            </div>
            <div className="user-header-right">
              <h2>@lovePhigitals</h2>
              <Link to={"/mint"}>
                {" "}
                <button>Mint</button>
              </Link>
            </div>
          </div>
          <div className="user-footer">
            <div className="user-footer-left">
              <h1>Collection</h1>
              <div className="footer-left1">
                <div className="footer1left">
                  <img alt="" className="small-img" src={pic}></img>
                </div>
                <div className="footer1-right">
                  <h2>item title</h2>
                  <h3>metadata</h3>
                  <Link to={"/manage-auction-page"}>
                    {" "}
                    <sup>manage</sup>
                  </Link>
                </div>
              </div>{" "}
              <div className="footer-left1">
                <div className="footer1left">
                  <img alt="" className="small-img" src={pic}></img>
                </div>
                <div className="footer1-right">
                  <h2>item title</h2>
                  <h3>metadata</h3>
                  <Link to={"/manage-auction-page"}>
                    {" "}
                    <sup>manage</sup>
                  </Link>
                </div>
              </div>
            </div>
            <div className="user-footer-right">
              <h1>Notification</h1>
              <div className="footer-right1">
                <img alt="" src={Message}></img>
                <h2>You Won</h2>
                <sup
                  onClick={() => {
                    setNewOpen(true);
                  }}
                >
                  New
                </sup>
              </div>
              <div className="footer-right1">
                <img alt="" src={Message}></img>
                <h2>You Won</h2>
                <sup
                  onClick={() => {
                    setNewOpen(true);
                  }}
                >
                  New
                </sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
