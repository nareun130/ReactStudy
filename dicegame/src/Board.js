import Dice from "./Dice";
import "./Board.css";

//prop에 default로 className을 2개 준다.
//App의 css로부터 App-board가 실행됨.
function Board({ name, color, gameHistory, className = "Board App-board" }) {
  const num = gameHistory[gameHistory.length - 1] || 1; //gameHistory에 아무값도 없으면 1로 초기화
  const sum = gameHistory.reduce((prev, cur) => prev + cur, 0);
  return (
    <div className={className}>
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      {gameHistory.join(",")}
    </div>
  );
}

export default Board;
