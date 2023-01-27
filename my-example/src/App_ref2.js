import { useState, useRef, useEffect } from 'react';

const App_ref2 = () => {
  const [count, setCount] = useState(0);
  // const [renderCount, setRenderCount] = useState(1);

  //변화를 감지하지만 렌더링을 발생시키면 안될 때 유용하게 사용 가능
  const renderCount = useRef(1); //ex) form 입력값 -> 렌더링을 해도 값을 가지고 있으므로 유용

  //useEffect는 렌더링 될 대마다 작업을 실행할 수 있게 설정해주는 훅
  useEffect(() => {
    console.log('렌더링수 : ' + renderCount.current);
    // setRenderCount(renderCount+1);//-> 무한루프
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <p>Count : {count}</p>
      <p>renderCount : {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>state올려</button>
    </div>
  );
};

export default App_ref2;
