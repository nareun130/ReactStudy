import Button from "./Button";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import { useState } from "react";
import HandIcon from "./HandIcon";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  //처음 나와 상대방의 초깃값을 설정 동일하게
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  //승부 결과를 저장할 state
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  // const result = getResult(hand, otherHand);

  //HandButton에서 리턴받은 onClick은 App.js handleButtonClick으로 연결
  const handleButtonClick = (nextHand) => {
    setHand(nextHand); //rock버튼 클릭 -> rock이 들어온다.

    //otherHand의 값을 generateRnadomHand의 리턴값으로
    const nextOtherHand = generateRandomHand();
    setOtherHand(nextOtherHand);

    setGameHistory([...gameHistory, getResult(nextHand, nextOtherHand)]);
    const comparison = compareHand(nextHand, nextOtherHand);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    // console.log(e); //-> 합성함수 : 가짜 이벤트

    if (num > 9) num = num % 10; // num : 0~9 사이로 만듦
    if (num < 1) num = 1; // num이 1보다 작으면 1로 만듦
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      {/* <p>{result}</p> */}
      <div>
        {score} : {otherScore}
      </div>

      <div>
        <HandIcon value={hand}></HandIcon>
        <HandIcon value={otherHand}></HandIcon>
      </div>
      <div>
        <input type="number" value={bet} min={1} max={9} onChange={handleBetChange} />
      </div>
      <p>승부기록: {gameHistory.join(",")}</p>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
}
export default App;
