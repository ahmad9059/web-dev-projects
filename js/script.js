//// global - window
//console.log(this);
//// function - window
//function fun() {
//  console.log(this);
//}
//fun();
//// method - object
//let obj = {
//  name: function () {
//   console.log(this);
//  },
//  age: 20,
//  email: "xyz@abc.com",
//}
//obj.name();

// function inside the method es5 - window
//let obj1 = {
//  func: function () {
//    console.log(this.email);
//    function childFun() {
//      console.log(this.email);
//    }
//    childFun();
//  },
//  email: "ahmad@xyz.com",
//};
//obj1.func();
// func inside the method es6 - object
//let obj2 = {
//  func: function () {
//    let child = () => {
//      console.log(this);
//    };
//    child();
//  },
//};
//
//obj2.func();

// constructor func - blank object
//function add() {
//  console.log(this);
//}
//
//let n = new add();

// in event listener value will be according to the element.
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this);
// });

// let obj1 = {
//   name: "Ahmad",
//   age: "20",
//   email: "ahmad@itsahmad.me",
//   city: "multan",
//   func: function () {
//     console.log(this.name);
//   },
// };

// obj1.func();
//function func(a, b, c) {
//  console.log(this);
//}
//let n = func.bind("ahmad");
//
//n();

//function makeHuman(name,age){
//  this.name = name;
//  this.age = age;
//}
//
//makeHuman.prototype.greet = 12;
//
//makeHuman.prototype.func = function(){
//  console.log(this.name);
//}
//
//let human1 = new makeHuman("ahmad",20);
//let human2 = new makeHuman("ali",30);
//

//function func(){
//  let num = 10;
//  return function(){
//    console.log(num);
//  }
//};
//
//let f = func();
//
//f();

//let parent = document.querySelector("#parent");
//
//parent.addEventListener("click", function (ev) {
//  if (ev.target.id === "play") {
//    console.log("Play Song");
//  } else if (ev.target.id === "pause") {
//    console.log("Pause Song");
//  }
//});

//document.getElementById("play").addEventListener("mouseover",function(){
//  console.log("Button Clicked");
//})

//let heading = document.querySelector("h1");
//
//heading.style.color = "red";
//

//function func1(f1) {
//  f1();
//  return function () {
//    console.log("returned fun");
//  };
//}
//fun = function () {
//  console.log("Passed Function");
//};
//let returned = func1(fun);
//
//returned();

//function divide(a, b) {
//  try {
//    if (b == 0) {
//      throw Error("Cannot Divide by Zero");
//    }
//    console.log(a / b);
//  } catch (err) {
//    console.log(err);
//  }
//}
//
//divide(6, 0);
//
//function fun() {
//  try {
//    let x = y + 5;
//  } catch (error) {
//    console.log("An Error occured:", error.message);
//  } finally {
//    console.log("finally alaways run");
//  }
//}
//fun();
//
// let ev = new Event("newEv");

// document.querySelector("button").addEventListener("newEv", function () {
//   console.log("Custom Event");
// });

// document.querySelector("button").addEventListener("newEv", function () {
//   console.log("Custom Event");
// });

// document.querySelector("button").dispatchEvent(ev);
// document.querySelector("button").dispatchEvent(ev);

// function hello() {
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.warn("fuck");
// }

// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");

// setTimeout(function () {
//   console.log("hey 4");
// }, 3000);
// setInterval(() => {
//   console.log("code");
// }, 2000);
// console.log("hello 5");
// console.log("hello 6");

//axios
//  .get(`https://randomuser.me/api/`)
//  .then((data) => console.log(data.data.results[0]));
//

//let promise = new Promise(function (resolve, reject) {
//  fetch(`https://randomuser.me/api/`)
//    .then((raw) => raw.json())
//    .then((result) => {
//      console.log(result.results[0].gender);
//      if (result.results[0].gender === "male") {
//        resolve();
//      } else {
//        reject();
//      }
//    });
//});
//promise
//  .then(function () {
//    console.log("Male Received");
//  })
//  .catch(function () {
//    console.log("Female Received");
//  });

//function getData(url, callback) {
//  fetch(`https://randomuser.me/api/`)
//    .then((raw) => raw.json())
//    .then((result) => {
//      callback(result);
//    });
//}
//
//getData("https://randomuser.me/api/", function (result) {
//  console.log(
//    result.results[0].gender,
//    result.results[0].name.first,
//    result.results[0].email,
//  );
//});

//async function func() {
//  let n = await fetch(`https://randomuser.me/api/`);
//  n = await n.json();
//  console.log(n.results[0].gender);
//}
//
//func();

//function* func() {
//  console.log("Start");
//  yield 1;
//  console.log("Middle");
//  yield 2;
//  console.log("End");
//  yield 3;
//}
//
//let gen = func();
//
//for (let i of gen) {
//  console.log(i);
//}

//let obj = {
//  name: "ahmad",
//  age: 20,
//  email: "ahmadhassan@xyz.com",
//  city: "multan",
//  country: "pakistan",
//};
//
//for (let i in obj) {
//  console.log(obj[i]);
//}

//let pro = new Promise(function (resolve, reject) {
//  let n = fetch(`https://randomuser.me/api/`)
//    .then((raw) => raw.json())
//    .then((result) => {});
//});
//

// let nums = Array.from({ length: 10000 }, (_, b) => b + 1);

// let worker = new Worker("worker.js");

// worker.postMessage(nums);

// worker.onmessage = function (data) {
//   console.log(data.data);
// };

// let kuchBhi = document.createElement("h1");

// kuchBhi.textContent = "Hack The Panat";

// kuchBhi.classList.add("h1-class");

// document.querySelector("body").appendChild(kuchBhi);

// let btn = document.createElement("button");
// btn.textContent = "Download Now";
// btn.style.backgroundColor = "#fff";

// document.querySelector("body").appendChild(btn);

// let btn1 = document.querySelector("button");

// btn1.addEventListener("mouseover", function () {
//   btn1.textContent = "Downloading Started!";
//   btn1.style.padding = "5px";
//   btn1.style.backgroundColor = "red";
// });
// btn1.addEventListener("mouseleave", function () {
//   btn1.textContent = "Download Now";

//   btn1.style.backgroundColor = "cyan";
// });
let btn = document.createElement("button");
btn.textContent = "Download Now";
document.querySelector("body").appendChild(btn);
let m = document.querySelector("body");

m.addEventListener("mousemove", function (dets) {
  btn.textContent = `${dets.clientX} ${dets.clientY}`;
});
