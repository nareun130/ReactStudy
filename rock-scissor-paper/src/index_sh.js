import React from "react";
import ReactDOM from "react-dom/client";

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};



function getResult(left, right) {
  //left : 나, right : 상대방
  console.log(left, "VS", right);
  if (WINS[left] === right) return "승리";
  if (left === right) return "무승부";
  return "패배"; //(me === WINS[right])
}

function handleClick() {
  console.log("가위바위보!");
}

const me = "rock";
const other = "scissor";
// const result = getResult(me, other);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<>와의 차이점 Fragment는 key를 넣어줄 수 있다. <>는  props를 완전히 사용할 수는 없다.
  <>
    <h1 id="title">가위바위보</h1>
    {/* <h2>{result}</h2> */}
    <button className="hand" onClick={handleClick}>
      가위
    </button>
    <button className="hand" onClick={handleClick}>
      바위
    </button>
    <button className="hand" onClick={handleClick}>
      보
    </button>
  </>
);
