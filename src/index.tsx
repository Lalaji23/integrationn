import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "./index.css";
import App from "./App";
import Provider from "store/Provider";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const APP_ID = "SSPePMlz2XQLX4mon3soXPHPZ2gN2NryJrWhF6rs";
const SERVER_URL = "https://acnuawjyxtyp.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL} initializeOnMount>
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
