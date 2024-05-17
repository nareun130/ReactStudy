import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import React from "react";

const entryPoint = document.getElementById("root");
//* JSX로 생성
// ReactDOM.createRoot(entryPoint).render(<App />);
//* JS로 생성
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
