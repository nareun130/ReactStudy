import Board from "./Board";
import "./App.css";
import { useState } from "react";
import dice from "./assets/logo.png";
import Button from "./Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  //히스토리로 num과 sum을 관리
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  //css를 동적으로 제어하기 위한 변수 선언
  let myClassName = "Board";
  let otherClassName = "Board";

  if (myHistory[myHistory.length - 1] > otherHistory[otherHistory.length - 1]) {
    myClassName += " Board-winner";//css할 때 띄어써줘야함.
    otherClassName += " App-board";
  } else if (myHistory[myHistory.length - 1] < otherHistory[otherHistory.length - 1]) {
    myClassName += " App-board";
    otherClassName += " Board-winner";
  } else {
    myClassName += " App-board";
    otherClassName += " App-board";
  }

  const handleRollClick = () => {
    //나의 주사위
    const nextMyNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);

    //상대 주사위
    const nextOtherNum = random(6);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <img className="App-logo" src={dice} alt="로고" />
      <h1 className="App-title">주사위 게임</h1>
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <Board name="나" color="blue" gameHistory={myHistory} className={myClassName} />
        <Board name="상대" color="red" gameHistory={otherHistory} className={otherClassName} />
      </div>
    </div>
  );
}

export default App;
