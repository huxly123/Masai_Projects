//  var x = 100;
// function test() {
//     console.log(x);
//     let  x=i=10
// }
// test()
// // console.log(x, i);

// dett()
// function dett() {
//     isv = "gef"
//     var isv
//     console.log(isv);
// }

// var a = "adssa"

// function dd() {
//     var a;
//     console.log(a);
// }
// dd()

// a = "sfs"
// var a;
// console.log(a);
// var a = 20;
// const b =40 ;
// function ff() {
//    return b
// }
// console.log(ff());


// function dcode() {
//   a = 33
//     // console.log(a);
// }
// console.log(a);
// if (true) {
//     var a=31
// }
// console.log(a);
// console.log(a);
// var a = 3
// // console.log(b);
// // let b=3

// console.log(a);
// const nam = {
//     nam: "ss",
//     dd:"ds"
// }
// nam.dd = 44
// console.log(nam);
// let arr = [1, 34, 3, 21];

// for (var i = 0; i < arr.length; i++){
//     setTimeout(() => {
//         console.log(arr[i],i);
//     },i*1000)
// }

// function init() {
//   const name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//    console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();
                               //clos doubt
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// // const myFunc = makeFunc();
// makeFunc();

// let makeFunc=()=> {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

//  const myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//     console.log("x",x);
//     return function (y) {
//       console.log("y", y);
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

// function x() {
//     for (var i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         },i*1000)
//     }
// }
// x()
// console.log("ff");
// "use strict"
// x = 5
// // console.log(x);
//     let a = 1;
//     function outer() {
    
//         function inner(b) {
//             console.log(a+b);
//         }
//         return inner
//     }
    
// outer()(3)
// function greeting(name) {
//  console.log(name+1);
// }

// function processUserInput(callback) {
//   var name = "Please enter your name."
//   callback(name);
// }

// // processUserInput(greeting);
// function greet(name, formatter) {
//     return 'welcome'+ formatter(name)
// }


// console.log(
//   greet("joe", function (name) {
//     return name.toUpperCase();
//   })
// );
 
//  setTimeout(function () {
//    var counter = 0;
//    console.log("Counter:", counter++);
//    setTimeout(function () {
    
//      console.log("Counter:", counter++);
//      setTimeout(function () {
      
//        console.log("Counter:", counter++);
//      }, 1000);
//    }, 2000);
//  }, 3000);
// var p1 = new Promise(function (resolve, reject) {
//   var num = Math.random();
//   if (num < 0.5) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });

// p1.then(function (result) {
//   console.log("Success:", result);
// }).catch(function (error) {
//   console.log("Error:", error);
// // });
// console.log("first");
// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     var randomInt = Math.floor(Math.random() * 10);
//     resolve(randomInt);
//   }, 4000);
// });
// console.log(promise);
// promise.then(function (data) {
//   console.log("Random int passed to resolve:", data);
// });
// console.log("last");

// console.log("start");
// const myProm = new Promise(function (resolve, reject) {
//   console.log("running");
//   resolve();
// });
// myProm.then(() => console.log("resolved"));
// console.log("end of main block");

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     randomInt = Math.floor(Math.random() * 10);
//     resolve(randomInt);
//   }, 500);
// });

// promise
//   .then(function (data) {
//     console.log("Random int passed to resolve:", data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(Math.floor(Math.random() * 10));
//       }, 3000);
//     });
//   })
//   .then(function (data) {
//     console.log("Second random int passed to resolve:", data);
//   });

//  var promise = new Promise(function (resolve, reject) {
//    resolve(5);
//  });

//  promise
//    .then(function (data) {
//      return data * 2;
//    })
//    .then(function (data) {
//      return data + 20;
//    })
//    .then(function (data) {
//      console.log(data);
//    });

// function fetchh() {
//     console.log("first");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((d) => d.json())
//       .then(function (data) {
//         console.log(data);
//       })
//     console.log("last");
// }
// fetchh();
// console.log("gg");

// async function asawa(){
//    return "ff"
// }
// console.log(asawa());


// async function asawa() {
//     console.log("first");
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//     console.log("last");
// }
// asawa()
// console.log("gg");

// function aa() {
//     var a=10

// }

// aa();
// console.log(a);

// (function () {
//     console.log("hi");
// })()

// var f = function () {
//   console.log("fsds");
// };

// foo()
// import User, { printName as na, printAge } from "./user.js";
import * as Users from "./user.js"

let printAge = Users.printAge
let printUser=Users.printName
// const userss = new User('Bob', 11)
let user = {
    age: 12,
    name:"huxlt"
}

printUser(user)
printAge(user)