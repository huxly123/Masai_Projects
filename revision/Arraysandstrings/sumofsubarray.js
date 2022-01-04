// function runProgram(input) {
//   input = input.trim().split("\n");
//   let cases = +input[0];
//   let line = 1;
//   for (let z = 0; z < cases; z++) {
//     let dim = input[line++].trim().split(" ").map(Number);
//     let n = +dim[0];
//     let k = +dim[1];
//     let arr = input[line++].trim().split(" ").map(Number);
//     let occ=false
//     let l = 0;
//     let r = 0;
//     let sum=0
//     while (l<n ) {
//       sum += arr[r]
//        if (sum == k) {
//         occ = true;
//         break
//       }
//       if (r == n - 1) {
//         l++;
//         r = l
//         sum = 0
//         continue
//       }

//       r++;
//     }
//     if (occ) {
//       console.log("Yes");
//     }
//     else {
//       console.log("No");
//     }
//   }
// }
// if (process.env.USERNAME === "huxly") {
//   runProgram(`3
// 5 3
// 1 2 1 3 4
// 4 5
// 1 2 1 3
// 2 1
// 3 1`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
