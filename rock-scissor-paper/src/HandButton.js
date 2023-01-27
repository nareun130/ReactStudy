import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  // console.log(value);
  const handleClick = () => onClick(value);

  //만약에 매개변수로 value를 받는 다면 value는 가짜 이벤트
  //onClick(value)를 반환 하므로 부모 컴포넌트인 App.js의 onClick으로 리턴 -> props가 위로 흐른다.
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
