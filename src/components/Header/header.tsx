import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Menu from "../../assets/menu.png";
import User from "../../assets/user.png";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatter";

export default function Header() {
  const { authenticate, isAuthenticated, account } = useMoralis();

  const handleConnect = async () => {
    try {
      console.log("click");
      await authenticate({ provider: "metamask" });
      console.log("click");
      window.localStorage.setItem("connectorId", "metamask");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="nav-links">
            <ul>
              <li>
                <a href="/">
                  <img alt="" src={Menu}></img>
                </a>
              </li>
            </ul>
            <ul>
              <Link to={"/market"}>
                <li> Market </li>
              </Link>
              
              <li>
                <Link to={"/User"}>
                  <img alt="" src={User}></img>
                </Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <button className="btnn2">{getEllipsisTxt(account)}</button>
                ) : (
                  <button className="btnn2" onClick={() => handleConnect()}>
                    Connect Wallet
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <hr></hr>
    </div>
  );
}
