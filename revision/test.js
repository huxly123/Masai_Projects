// // let arr = [[1, 2], [2, 4], [3, 5]]
// // let n = [2, 2]
// const arr = ["a", "b", "d"];

// let start = 2;
// let deleteCount = 0;
// arr.splice(start, deleteCount, "c");
// console.log(arr);

// let printname = new Promise((res, rej)=>{
//   return res("ho")
// })
// console.log(printname);
// printname.then((data) => {
//     console.log("data",data);
// })

let arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(arr.slice(2,5));
arr.splice(2, 2, "rr");
console.log(arr);