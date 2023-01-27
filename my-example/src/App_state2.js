import { useState } from 'react';

const manyWork = () => {
  console.log('많은 양의 작업');
  // return alert('hi');
  return ['홍길동', '이순신'];
};

export default function App_state2() {
  // const [names, setNames] = useState(manyWork());//렌더링이 될때마다 함수를 호출
  const [names, setNames] = useState(() => {//초깃값을 콜백으로 설정 -> 첫 렌더링에서만 함수를 호출 -> 콜백 함수의 실행이 오래 걸리면 첫 렌더링이 매우 늦어질 수 있음.
    return manyWork();
  });//
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    //매개변수를 받으면 -> onClick합성함수 객체를 받음
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
      <br />
      <button onClick={handleUpload}>UPLOAD</button>
    </div>
  );
}
