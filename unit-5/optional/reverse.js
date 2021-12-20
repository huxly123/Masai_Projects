arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  "  ",
  "m",
  "a",
  "k",
  "e",
  "s",
  "  ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e",
];
// arr = arr.join("").toString();
// console.log(arr.length);

// let str = ""
// let ans = []
// for (let i = str.length - 1; i >= 0; i--){
//     str += arr[i]
//     if (arr[i] == " ") {
//         ans.push(str)
//         ans.push(" ")
//         str=""
//     }
// }
// console.log(ans);


arr = arr.join("").trim().split(" ").reverse().join(" ").split("");


