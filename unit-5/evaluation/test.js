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

// processUserInput(greeting);
