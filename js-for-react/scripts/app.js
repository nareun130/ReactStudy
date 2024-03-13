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
const {name : userName, age} = {
    name : "seongho",
    age : 26
}

console.log(userName );
console.log(age);
