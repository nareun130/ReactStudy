import { useRef, useEffect } from 'react';

const App = () => {
  //useRef를 이용해서 DOM요소에  직접 접근가능
  //대표적으로 focus 줄 때 이용 가능
  const inputRef = useRef();
                                                 
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []); //첫 번째 렌더링 될 때 한번만 실행

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="userid" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;
