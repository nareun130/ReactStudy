import { useState, useRef } from 'react';

const App_ref1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  //let : 렌더링 되면서 초기화 됨
  let countVar = 0;

  const increaseVar = () => {
    countVar += 1;
    console.log('countVar: ', countVar);
  };

  const increaseCountState = () => setCount((prev) => prev + 1);

  console.log('렌더링...');
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('countRef.current: ', countRef.current);
  };

  const printResults = () =>
    console.log(`ref : ${countRef.current}, var : ${countVar} `);

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref&Var출력</button>
    </div>
  );
};

export default App_ref1;
