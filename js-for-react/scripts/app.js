// import {apiKey} from './util.js';
// //* default 값을 가져올 때는 원하는 이름으로 가능
// import defaultKey from './util.js';

//* 이렇게 한번에 가져오기도 가능 ! + as를 통한 별칭 설정
import * as util from "./util.js";
import { apiKey, abc as content } from "./util.js";
// console.log(apiKey); 
// console.log(defaultKey);
// console.log(util.default);
// console.log(util.apiKey);
// console.log(util.abc);
// console.log(content);

// const user = {
//     name : 'nareun130',
//     age : 26,
//     greet() {
//         console.log("hello!");
//         console.log(this.age);
//     }
// }

// console.log(user.name);
// user.greet();
//*. Class 
// class User {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age; 
//     }
//     greet() {
//         console.log('Hi');
//     }
// }

// const user1 = new User("marnuel", 35);
// console.log(user1);
// user1.greet();

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

//* findIndex는 유용하게 쓰인다.
const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

//* map은 새로운 배열을 반환
// const editedHobbies = hobbies.map((item => item+"!"));
//! 객체 반환시에는 ()로 감싸줘야 한다.
const editedHobbies = hobbies.map((item => ({text : item})));
console.log(editedHobbies);

function transformToObjects(numberArray) {
    return numberArray.map(item => ({'val' : item}));
}

console.log(transformToObjects([1,2,3]));

//* 구조분해
const [firstName, lastName] = ['seongho', 'kim'];

console.log(firstName, lastName);

//* 콜론을 사용해 별칭 부여 가능
// const {name : userName, age} = {
//     name : "seongho",
//     age : 26
// }
const user = {
    name : "seongho",
    age : 26
}

// console.log(userName);
// console.log(age);

//* 전개 연산자
const newHobbies = ['Reading'];
// const mergedHobbies = [hobbies, newHobbies]; -> 중첩배열
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);


const extendedUser = {
    isAdmin : true,
    ...user
}
console.log(extendedUser);

// const password = prompt('Your password');

// if(password === "Hello"){
//     console.log("Hello works");
// }else if (password === "hello"){
//     console.log("hello works");
// }else {
//     console.log("Access not granted.");
// }


// for (const hobby of hobbies) {
//     console.log(hobby);
// }

//! 함수를 값으로 사용!
function handleTimeout() {
    console.log("time out");
}

const handleTimeout2 = () =>{
    console.log("time out ... again!");
}

setTimeout(handleTimeout, 2000); //! ()가 붙으면 함수의 반환값이 전달됨. -> 함수를 전달할 때는 함수명을
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More time out...");
}, 4000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log('hi'));

//! 함수안에 다른 함수 정의
function init() {
    function greet() {
        console.log('Hi!');
    }
    greet();
}

init();

//* 참조형 & 기본값
//* 기본값
//~> 항상 새 값을 생성, 기존 값 수정 x
let userMessage  ='Hello!';
userMessage = userMessage.concat('!!!'); 

//* 참조형 -> 객체 저장시 메모리 주소를 사용
//~> 기존 배열을 변경 -> 메모리 주소를 저장하고 그 주소의 배열을 변경
//! 상수는 값을 변경할 수 없는 것이 아니라, 변수를 덮어쓸 수 없다는 뜻 -> 메모리 주소를 이용!
const likes = ["Sports", "Cooking"];
likes.push("Working");
console.log(likes);

var map = Array.prototype.map;
var a = map.call("Hello world", function (x) {
    return x.charCodeAt(0);
});

console.log(a);

var total = [0,1,2,3,4].reduce(
    (acc, cv) => acc+ cv,0
);

console.log(total);