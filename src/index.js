import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss"; // scss globale

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);