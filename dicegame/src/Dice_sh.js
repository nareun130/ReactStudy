import diceBlue01 from "./assets/dice-blue-1.svg";
import diceBlue02 from "./assets/dice-blue-2.svg";
import diceBlue03 from "./assets/dice-blue-3.svg";
import diceBlue04 from "./assets/dice-blue-4.svg";
import diceBlue05 from "./assets/dice-blue-5.svg";
import diceBlue06 from "./assets/dice-blue-6.svg";
import diceRed01 from "./assets/dice-red-1.svg";
import diceRed02 from "./assets/dice-red-2.svg";
import diceRed03 from "./assets/dice-red-3.svg";
import diceRed04 from "./assets/dice-red-4.svg";
import diceRed05 from "./assets/dice-red-5.svg";
import diceRed06 from "./assets/dice-red-6.svg";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./assets", true, /\.svg$/));//정규식을 잘 이용하면 뭔가 될지도?
// let imgs = [];
// for(let i = 0; i<6;i++){
//   imgs.push("diceBlue0"+i);
// }
// console.log(imgs);

// console.log(images);

//string 함수를 잘 사용하면 뭔가 보일 거 같다.

Object.keys(images).forEach((key) => {
  console.log(key);
  console.log(images[key]);
});

const DICE_IMAGES = {
  blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};
// console.log(DICE_IMAGES);

// function Dice({ color, num }) {
//   const src = DICE_IMAGES[color][num - 1];
//   return <img src={src} alt="주사위" />;
// }

function Dice() {
  return (
    <div>
      {Object.keys(images).forEach((key) => {
        console.log(images[key]);
        return <img src={images[key]} alt="" />;
      })}
    </div>
  );
}
export default Dice;
