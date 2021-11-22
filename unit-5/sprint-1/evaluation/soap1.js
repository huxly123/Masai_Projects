var res = 0;

function lowerBound(arr, target, left, right) {
  if (left >= right) {
    return left;
  }
  let mid = Math.floor(left + (right - left) / 2);
//   if (arr[mid] === target) {
//     res = mid;
//     return lowerBound(arr, target, left,mid);
//   }
    if (arr[mid] <target) {
      
    return lowerBound(arr, target, mid+1, right);
   } else if (arr[mid] > target) {
       
    return lowerBound(arr, target, left, mid);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => {
    return a - b;
  });
  let q = +input[2];
  let line = 3;
  for (let i = 0; i < q; i++) {
    let amount = +input[line++];

    lowerBound(arr, amount, 0, arr.length - 1);
    console.log(res);
    res = 0;
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
