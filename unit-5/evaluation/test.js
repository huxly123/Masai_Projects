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
// import * as Users from "./user.js"

// let printAge = Users.printAge
// let printUser=Users.printName
// // const userss = new User('Bob', 11)
// let user = {
//     age: 12,
//     name:"huxlt"
// }

// printUser(user)
// printAge(user)

// let user = 4

// function gg() {
   
//     console.log(user);
// }
// gg()
// {

//     var a=1
// }
// console.log(a);

// class Student{
//     constructor(name, age) {
//         this.name = name
//           this.age = age;
//     }
//     print() {
//         return this.name + " has age " + this.age
//     }
// }

// student1 = new Student("Jhon", 22)


// console.log(student1.print());

// class School extends Student{
//     constructor(name, st_name, st_age) {
//         super(st_name, st_age)  //represent the student object
//         this.scl_name=name
//     }
//     print() {
//         return (
//           this.name +
//           " whose age is " +
//           this.age +
//           " studies in " +
//           this.scl_name
//         );
//     }
// }

// school1 = new School("ABC", "jane", 23)
//   console.log(school1);
// console.log(school1.print());

// let arrr = new Array(10).fill(10)
// console.log(arrr);

// let arr = [2, 3]

// let obj = {
//     name: "asad",
//     getIntro: function () {
//         console.log(this.name);
//     }
// }

// let name = {
//     f_name: "huxly",
//     l_name:"singh"
// }

// let name2= {
//   f_name: "aks",
//   l_name: "ann",
// };

// let printName = function (hometown, state) {
//     console.log(this.f_name+this.l_name+hometown+state);
// }

// /////call

// printName.call(name, "kan", "tam")
// printName.call(name2, "chi", "tam");

// ///apply

// printName.apply(name2, ["kan", "tam"]);

// /////Bind

// let printFull = printName.bind(name, "kan", "tam");
// // console.log(printFull);
// printFull()

// const person = {
//   f_name: "hux",
//   l_name: "singh",
//  get fullName() {
//     return `${this.f_name} ${this.l_name}`
//   },
//  set fullNamee(value) {
//    const parts = value.split(" ");
//    this.f_name = parts[0];
//    this.l_name=parts[1]
//  }
// }

// person.fullNamee='huux suingh'

// console.log(person.fullName);
// console.log(person);

// function* simpleGenerator() {
//   yield 1
//   yield 2
//   yield 3
// }

// const generateObject = simpleGenerator();


// console.log(generateObject.next())
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());

// const data = {
//   name: "dd",
//   age: 23,
//   vehicle: {
//     warranty: {
//       date: 21,
//     },
//   },
// };

// console.log(data.vehicle?.warranty);



// console.log("1" + 2);
// console.log("3" * 6);
// console.log("12"-4);

var a = 1;
let b = 2
function dd() {
  console.log(a);
  console.log(b);
}
dd()