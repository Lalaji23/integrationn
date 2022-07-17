import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

import "./App.css";

import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import Start from "./components/market/market";
import { Routes, Route } from "react-router-dom";
import Memories from "./components/market/memories/memories";
import User from "./components/User/User";
import Mintt from "./components/mint/Mint-box";
import Show from "./components/show-nft/show";
import ManageAuction from "./components/manage-auction-page/manage-auction-page";

const App: React.FC = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId") as any;
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/User" element={<User />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/market" element={<Start />}></Route>
        <Route path="/market/memories/memories" element={<Memories />}></Route>
        <Route path="/mint" element={<Mintt />}></Route>
        <Route path="/show-nft" element={<Show />}></Route>
        <Route path="/manage-auction-page" element={<ManageAuction />}></Route>
      </Routes>
    </div>
  );
};

export default App;
