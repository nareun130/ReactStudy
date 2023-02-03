import { FaStar } from 'react-icons/fa';

//^selected하나하나로 별 하나하나의 색깔을 설정해서 만든다.
//?default함수로 onSelect 초깃값 설정, onSelect : 별선택하는 함수를 props로 받아옴
export default function Star({ selected = false, onSelect = (f) => f }) {
  return <FaStar color={selected ? 'blue' : 'gray'} onClick={onSelect} />;
}
