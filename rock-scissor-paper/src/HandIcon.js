import rock from "../src/assets/rock.svg";
import paper from "../src/assets/paper.svg";
import scissor from "../src/assets/scissor.svg";
//이미지 경로를 rock,paperscissor라는 변수로 인식

const IMAGES = {
  rock: rock,
  scissor: scissor,
  paper: paper,
};

function HandIcon({ value }) {
  //그냥 경로를 문자열로 넣으면 나오지 않는다. -> create-react-app처럼 웹팩을 사용하는 에는 require() 혹은 import를 사용해야 한다. ->import 권장됨.
  //웹팩 : 모듈 번들러 라이브러리 중 하나

  // console.log(value);//문자열
  // console.log({value});/ / 객체
  // console.log(rock);
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
  //   return <img src={IMAGES[value]} alt={value} />;
}

export default HandIcon;
