import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
    return Math.ceil(Math.random() * n);
}
  
function App_org1() {
    const [num, setNum] = useState(1);  //파라미터 초깃값
    // 합계 변수 state 생성
    const [sum, setSum] = useState(0);
    //기록부분은 배열로
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        //주사위를 클릭할 때마다 주사위값 합산
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
    };
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>나</h2>           
                <Dice color="blue" num={num}/>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                {gameHistory.join(', ')}                
            </div>
        </div>
    );
}
export default App_org1;