import React,{Fragment} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<>와의 차이점 Fragment는 key를 넣어줄 수 있다. <>는  props를 완전히 사용할 수는 없다.
  <>
    <App />
  </>
);
